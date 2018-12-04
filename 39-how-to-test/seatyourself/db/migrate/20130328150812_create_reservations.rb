class CreateReservations < ActiveRecord::Migration[5.0]
  def change
    create_table :reservations do |t|
      t.datetime :begin_time
      t.datetime :end_time
      t.references :restaurant
      t.references :user
      t.text :notes

      t.timestamps
    end
  end
end
