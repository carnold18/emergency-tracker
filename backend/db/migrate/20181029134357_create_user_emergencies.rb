class CreateUserEmergencies < ActiveRecord::Migration[5.2]
  def change
    create_table :user_emergencies do |t|
      t.integer :user_percentage
      t.integer :emergency_percentage
      t.belongs_to :user_id
      t.belongs_to :emergency_id

      t.timestamps
    end
  end
end
