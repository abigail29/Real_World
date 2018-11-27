class AddInterestsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_reference :users, :interest, index: true
  end
end
