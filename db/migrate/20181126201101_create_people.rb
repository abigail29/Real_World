class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.string :description, null: false
      t.string :date, null: false
      t.string :book, null: false
      t.string :movie, null: false
      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
