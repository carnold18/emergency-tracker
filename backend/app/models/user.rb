class User < ApplicationRecord
    belongs_to :zone
    has_many :user_emergencies
end
