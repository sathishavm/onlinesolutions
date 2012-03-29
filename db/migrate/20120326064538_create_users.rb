class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :mobile
      t.string :address
      t.string :pincode
      t.string :state
      t.string :country
      t.timestamps
    end
  end
end
