module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '39d6b9dc75509b769199bc3f236a35dd'),
  },
});
