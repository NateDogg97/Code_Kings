const { AuthenticationError } = require('apollo-server-express');
const { User, Project } = require('../models');
const { signToken } = require('../utils/auth');

const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
    Query: {
          user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id)
              .populate('createdProjects')
              .populate('developingProjects');
              return user;
            }
            throw new AuthenticationError('Not logged in');
          },
          projects: async () => {
            return await Project.find();
          },
          project: async (parent, { projectId }) => {
            return await Project.findOne({_id: projectId})
             .populate('developers')
             .populate('owner');
          },

        //   STRIPE API QUERY
          checkout: async (parent, args, context, {_id}) => {
            const url = new URL(context.headers.referer).origin;
            const project = await Project.findById(_id);
            const line_items = [];
      
            const product = await stripe.products.create({
            name: project.name,
            description: project.description,
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
          },
          me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('createdProjects').populate('developingProjects');
            }
            throw new AuthenticationError('You need to be logged in!');
          },
      },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return {token, user};
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
        
            throw new AuthenticationError('Not logged in');
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({ email });

            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
        },
        updateProject: async (parent, {id}, context)  => {
          if (context.user) {
            return await Project.findByIdAndUpdate(
              projectId, 
              {
                open: false,
                developer: context.user
              }, 
              {new:true});
        }
        },
        deleteProject: async (parent, {id})  => {
          return await Project.findByIdAndDelete(id)
        }
    }
}

module.exports = resolvers;