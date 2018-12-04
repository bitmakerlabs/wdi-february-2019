class CreatePictures < ActiveRecord::Migration[5.1]
  def change
    create_table :pictures do |t|
      t.string :url
      t.string :title
      t.string :description

      t.timestamps null: false
    end
  end
end
