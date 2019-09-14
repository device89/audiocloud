class Track < ApplicationRecord
    validates :title, :user_id, :description, presence: true
    belongs_to :user
    has_one_attached :audio
end