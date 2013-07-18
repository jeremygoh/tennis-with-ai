
SHOTS = {forehand: {beats: :backhand}, backhand: {beats: :dropshot}, dropshot: {beats: :forehand}}

def computer_picks
  random_number = rand()
  
  if random_number <=0.33
    :forehand
  elsif random_number <=0.66
    :backhand
  else
    :dropshot
  end
end

def result(user_pick, computer_pick)

  if SHOTS[user_pick.to_sym][:beats] == computer_pick
    :user
  elsif SHOTS[computer_pick][:beats] == user_pick.to_sym
    :computer
  else
    :draw
  end
end




