class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :title
      t.string :image
      t.string :description
      t.integer :price
      t.boolean :availability
      t.boolean :likes
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :estate_sale, null: false, foreign_key: true

      t.timestamps
    end
  end
end
