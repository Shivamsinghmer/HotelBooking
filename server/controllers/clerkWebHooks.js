import User from '../models/User.js';
import { Webhook } from 'svix';

const clerkWebHooks = async (req, res) => { 
  try {
    // create svix instance with your Clerk webhook secret
    const whook = new Webhook(process.envv.CLERK_WEBHOOK_SECRET);

    //getting headers
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-signature": req.headers["svix-signature"],
      "svix-timestamp": req.headers["svix-timestamp"]
    }

    // verifying header
    await whook.verify(JSON.stringify(req.body), headers);

    // getting data from request body
    const {data, type, action} = req.body;
    const userData = {
      _id: data.id,
      username: data.first_name + " " + data.last_name,
      image: data.image_url,
      email: data.email_addresses[0].email_address,
    }

    // Switch case for different events
    switch (type) {
      case 'user.created':
        // Create a new user in your database
        await User.create(userData);
        break;
      case 'user.updated':
        // Update the existing user in your database
        await User.findByIdAndUpdate(data.id, userData);
        break;
      case 'user.deleted':
        // Delete the user from your database
        await User.findByIdAndDelete(data.id);
        break;
      default:
        break;
    }
    res.json({success: true, message: 'Webhook processed successfully'});

  } catch (error) {
    console.error('Error creating Webhook:', error.message);    
    res.json({success: false, message: error.message});
  }
}

export default clerkWebHooks;