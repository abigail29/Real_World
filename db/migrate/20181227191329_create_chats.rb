class CreateChats < ActiveRecord::Migration[5.2]
  def change
    create_table :chats do |t|
      t.string :name
      t.string :description
      t.belongs_to :interest, null: false

      t.timestamps
    end
  end
end
