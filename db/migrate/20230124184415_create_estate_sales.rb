class CreateEstateSales < ActiveRecord::Migration[7.0]
  def change
    create_table :estate_sales do |t|
      t.string :name
      t.string :description
      t.boolean :item_sold
      t.integer :item_count

      t.timestamps
    end
  end
end
