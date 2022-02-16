class UsersController < ApplicationController
    set :default_content_type, 'application/json'

    get "/users" do 
        # fetch("http://localhost9292/users")
        users = User.all
        users.to_json
    end

    post "/users" do
        new_user = User.create(params)
        # if this does not work, do User.create(name: param[:name])
    end
end

