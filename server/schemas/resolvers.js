const { AuthenticationError } = require('apollo-server-express');
const { User, Project } = require('../models');
const { signToken } = require('../utils/auth');

// COMPLETE AFTER SETTING UP STRIPE API
// const stripe = require('stripe')('');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id)
              .populate('myOpenProjects')
              .populate('myClaimedProjects');
              return user;
            }
            throw new AuthenticationError('Not logged in');
          },
          projects: async () => {
            return await Project.find();
          },
          project: async (parent, { _id }) => {
            return await Project.findById(_id)
            .populate('developer')
            .populate('owner');
          },

        //   STRIPE API QUERY
          checkout: async (parent, args, context, {_id}) => {
            const url = new URL(context.headers.referer).origin;
            const project = await Project.findById(_id);
            const line_items = [];
      
            const product = await stripe.products.create({
            name: project.name,
            description: projects.description,
            });
    
            const price = await stripe.prices.create({
            product: product.id,
            unit_amount: project.price * 100,
            currency: 'usd',
            });
    
            line_items.push({
            price: price.id,
            quantity: 1
            });
            
      
            const session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items,
              mode: 'payment',
              success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
              cancel_url: `${url}/`
            });
      
            return { session: session.id };
          }
    }
}