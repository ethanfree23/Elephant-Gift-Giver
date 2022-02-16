class Company < ActiveRecord::Base
    has_many :gifts
    has_many :users, through: :giftees
end