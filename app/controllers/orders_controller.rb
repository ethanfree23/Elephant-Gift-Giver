class OrdersController < ApplicationController
    set :default_content_type, 'application/json'

    get "/orders" do 
        orders = Order.all
        orders.to_json
    end

    post "/orders" do
        new_orders = Order.create(params)
        # if this does not work, do User.create(name: param[:name])
    end
end

