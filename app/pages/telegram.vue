<template>
  <div style="margin-top: 200px;">
    <h2>Login with Telegram</h2>

    <!-- Telegram Widget Container -->
    <div id="telegram-login-widget"></div>

    <!-- Debug Info -->
    <div style="margin-top: 20px; font-size: 12px; color: #666;">
      <p>Debug: {{ debugInfo }}</p>
      <p v-if="showLink">Click this link to subscribe: <a href="https://t.me/Lutus12Bot?start=subscribe" target="_blank">Subscribe to Telegram Bot</a></p>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "TelegramLogin",

  data() {
    return {
      debugInfo: 'Loading...',
      showLink: false
    };
  },

  mounted() {
    // Check if user data exists in URL params first
    this.checkTelegramAuth();
    
    // Load widget after DOM is ready
    this.$nextTick(() => {
      this.loadTelegramWidget();
    });
  },

  methods: {
    loadTelegramWidget() {
      const container = document.getElementById("telegram-login-widget");
      
      if (!container) {
        this.debugInfo = "❌ Container not found";
        console.error("Container not found");
        return;
      }

      // Check if script already exists
      if (container.querySelector('script') || container.querySelector('iframe')) {
        this.debugInfo = "⚠️ Widget already loaded";
        console.log("Widget already loaded");
        return;
      }

      this.debugInfo = `Loading widget... URL: ${window.location.origin}`;

      // Create script element
      const script = document.createElement("script");

      script.src = "https://telegram.org/js/telegram-widget.js?22";
      script.async = true;

      // Telegram Bot Username
      script.setAttribute("data-telegram-login", "Lutus12Bot");

      // Widget UI Settings
      script.setAttribute("data-size", "medium");
      script.setAttribute("data-userpic", "true");
      script.setAttribute("data-radius", "10");

      // Use callback method (works for local testing)
      script.setAttribute("data-onauth", "onTelegramAuth(user)");
      script.setAttribute("data-request-access", "read");

      // Make callback global
      window.onTelegramAuth = (user) => {
        this.debugInfo = `✅ Login success: ${user.first_name}`;
        this.onTelegramAuth(user);
      };

      // Add error handling
      script.onerror = () => {
        this.debugInfo = "❌ Failed to load Telegram widget script";
        console.error("Failed to load Telegram widget script");
      };

      script.onload = () => {
        this.debugInfo = "✅ Telegram widget script loaded successfully";
        console.log("Telegram widget script loaded successfully");
        
        // Check if iframe was created
        setTimeout(() => {
          const iframe = container.querySelector('iframe');
          if (iframe) {
            this.debugInfo += " | ✅ Button iframe created";
          } else {
            this.debugInfo += " | ⚠️ No button appeared - check bot configuration";
          }
        }, 1000);
      };

      // Append widget into div
      container.appendChild(script);
    },

    checkTelegramAuth() {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      
      if (id) {
        // Extract user data from URL params
        const user = {
          id: urlParams.get('id'),
          first_name: urlParams.get('first_name'),
          last_name: urlParams.get('last_name'),
          username: urlParams.get('username'),
          photo_url: urlParams.get('photo_url'),
          auth_date: urlParams.get('auth_date'),
          hash: urlParams.get('hash'),
        };

        this.onTelegramAuth(user);
        
        // Clean URL after processing
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    },

    onTelegramAuth(user) {
      console.log("Telegram Login Success:", user);

      this.debugInfo = `Processing login for ${user.first_name}...`;

      // Send user data to backend (will send notification)
      this.sendUserToBackend(user);
    },

    async sendUserToBackend(user) {
      try {
        const res = await fetch("/api/auth/telegram", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        const data = await res.json();
        console.log("Backend Response:", data);

        if (data.success) {
          this.debugInfo = `✅ Welcome ${user.first_name}! Check your Telegram for a message.`;
          this.showLink = true
          alert(`Welcome ${user.first_name}! Would you like to receive updates from our Telegram bot? Click this link: https://t.me/Lutus12Bot?start=subscribe`);
        } else {
          this.debugInfo = `⚠️ Login successful but notification failed`;
          alert(`Welcome ${user.first_name}! Would you like to receive updates from our Telegram bot? Click this link: https://t.me/Lutus12Bot?start=subscribe`);
        }
      } catch (error) {
        console.error("Telegram login error:", error);
        this.debugInfo = `❌ Error: ${error.message}`;
        alert(`Welcome ${user.first_name}!`);
      }
    },
  },
};
</script>
