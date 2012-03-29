class UserController < ApplicationController
  	before_filter :authenticate_user!
	def index

	end
	def home
		if(current_user)
		redirect_to '/dashboard/new'
		end
  end
end
