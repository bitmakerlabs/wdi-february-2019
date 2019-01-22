class ReaddCapacityToRestaurant < ActiveRecord::Migration[5.0]

  def change
    change_table :restaurants do |t|
      t.integer :capacity, :default => 100
    end
  end

end
