module Types
  class TeamType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :slug, String, null: false
    field :svg_logo_url, String, null: true
    field :png_logo_url, String, null: true
    #field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    #field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
