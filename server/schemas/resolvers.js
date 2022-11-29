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
              .populate('projects');
      
              return user;
            }
      
            throw new AuthenticationError('Not logged in');
          },

        //   STRIPE API QUERY

        //   checkout: async (parent, args, context) => {
        //     const url = new URL(context.headers.referer).origin;
        //     const order = new Order({ projects: args.projects });
        //     const line_items = [];
      
        //     const { projects } = await order.populate('projects');
      
        //     for (let i = 0; i < projects.length; i++) {
        //       const project = await stripe.projects.create({
        //         name: projects[i].name,
        //         description: projects[i].description,
        //       });
      
        //       const price = await stripe.prices.create({
        //         project: project.id,
        //         unit_amount: projects[i].price * 100,
        //         currency: 'usd',
        //       });
      
        //       line_items.push({
        //         price: price.id,
        //         quantity: 1
        //       });
        //     }
      
        //     const session = await stripe.checkout.sessions.create({
        //       payment_method_types: ['card'],
        //       line_items,
        //       mode: 'payment',
        //       success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        //       cancel_url: `${url}/`
        //     });
      
        //     return { session: session.id };
        //   }
    },











    Mutation: {
        addUser: async (parent, args) => {

        },
        updateUser: async (parent, args, context) => {

        },
        login: async (parent, {email, password}) => {

        }
        //Need mutations for update open/claimed projects for User and
        //"developer" for project?
    }
}