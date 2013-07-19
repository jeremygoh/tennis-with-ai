require 'data_mapper'

DataMapper::setup(:default, "sqlite3:///#{Dir.pwd}/shots.db")

class Shot
  include DataMapper::Resource
  property :id, Serial
  property :player1_shot, Text
  property :player2_shot, Text
  property :rally_winner, Text
end

DataMapper.finalize




