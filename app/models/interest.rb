class Interest < ApplicationRecord

  validates :name, presence: true
  validates :location, presence: true
  validates :description, presence: true
  validates :date, presence: true
  validates :movie, presence: true
  validates :book, presence: true

  belongs_to :user

end
