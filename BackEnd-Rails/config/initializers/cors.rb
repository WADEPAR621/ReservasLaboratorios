Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
<<<<<<< HEAD
      origins '*'
  
      resource '*',
               headers: :any,
               methods: %i[get post put patch delete options head]
=======
      origins '*' # later change to the domain of the frontend app
      resource '*',
               headers: :any,
               methods: %i[get post put patch delete options head],
               expose: [:Authorization]
>>>>>>> 1cdc86cbf24890ed9479e0d38229b2d89531aec4
    end
  end