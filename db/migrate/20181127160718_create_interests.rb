class CreateInterests < ActiveRecord::Migration[5.2]
  def change
    create_table :interests do |t|
      t.string :name, presence: true
      t.string :description, presence: true
      t.string :date, presence: true
      t.string :movie, presence: true
      t.string :book, presence: true
      t.string :location, presence: true

      t.belongs_to :user

    end
  end
end
