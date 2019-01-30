class CreateRestaurants < ActiveRecord::Migration[5.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :address
      t.string :phone
      t.string :picture
      t.text :description
      t.references :category

      t.timestamps
    end
  end
end
