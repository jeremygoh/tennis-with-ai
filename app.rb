require 'sinatra'
require './result.rb'
require 'json'

get '/' do

erb :index

end

post '/selection' do
  content_type :json
  @computer_choice = computer_picks
  @user_choice = params[:picks]
  @result = result(@user_choice, @computer_choice)

  return {computer_choice: @computer_choice, winner: @result}.to_json
#take what has been sent by JS, and return some json
end
