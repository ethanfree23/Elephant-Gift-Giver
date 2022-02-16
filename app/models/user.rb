class User < ActiveRecord::Base
    has_many :gifts
    has_many :giftees, through: :gifts
end