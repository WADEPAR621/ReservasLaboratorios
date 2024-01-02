<<<<<<< HEAD
class ApplicationController < ActionController::Base
=======
class ApplicationController < ActionController::API
    before_action :configure_permitted_parameters, if: :devise_controller?
    protected
    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: %i[name avatar])
      devise_parameter_sanitizer.permit(:account_update, keys: %i[name avatar])
    end
>>>>>>> 1cdc86cbf24890ed9479e0d38229b2d89531aec4
end
