class Zone < ApplicationRecord
    has_many :users
    has_many :user_emergencies, through: :users
end
