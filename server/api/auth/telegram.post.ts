export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  
  // Get user data from Telegram login
  const { id, first_name, last_name, username, photo_url, auth_date, hash } = body;

  console.log('Telegram Login:', { id, first_name, last_name, username });

  // Your Telegram Bot Token (get from @BotFather)
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || 'YOUR_BOT_TOKEN';

  // Send welcome message to the user
  try {
    const message = `🎉 Welcome ${first_name}!\n\nYou have successfully logged in to our website.\n\nThank you for using our service!`;

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: id,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    const result = await response.json();

    if (result.ok) {
      console.log('✅ Message sent successfully to user:', id);
      
      return {
        success: true,
        message: 'Login successful and notification sent',
        user: {
          id,
          first_name,
          last_name,
          username,
          photo_url,
        },
      };
    } else {
      console.error('❌ Failed to send message:', result);
      
      return {
        success: true,
        message: 'Login successful but notification failed',
        error: result.description,
        user: {
          id,
          first_name,
          last_name,
          username,
          photo_url,
        },
      };
    }
  } catch (error: any) {
    console.error('❌ Error sending Telegram message:', error);
    
    return {
      success: true,
      message: 'Login successful but notification failed',
      error: error.message,
      user: {
        id,
        first_name,
        last_name,
        username,
        photo_url,
      },
    };
  }
});
