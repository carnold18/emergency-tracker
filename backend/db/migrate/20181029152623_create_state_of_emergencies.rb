class CreateStateOfEmergencies < ActiveRecord::Migration[5.2]
  def change
    create_table :state_of_emergencies do |t|
      t.boolean :tornado
      t.boolean :flood
      t.boolean :hurricane
      t.boolean :earthquake
      t.string :other

      t.timestamps
    end
  end
end
