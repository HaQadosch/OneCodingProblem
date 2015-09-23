example_one = '1??'
example_two = '1011?11??1?'
example_three = '???'

def compute_perms(in_string):

  index = in_string.find('?')
  if index < 0:
    return [in_string]

  branch1 = [(in_string[:index] + '0' + '{0}').format(i) for i in compute_perms(in_string[index+1:])]
  branch2 = [(in_string[:index] + '1' + '{0}').format(i) for i in compute_perms(in_string[index+1:])]
  return branch1 + branch2

def check_result(results, input_str):
  print results
  question_mark_count = input_str.count('?')
  assert len(results) == 2 ** question_mark_count

check_result(compute_perms(example_one), example_one)
check_result(compute_perms(example_two), example_two)
check_result(compute_perms(example_three), example_three)

print 'W00t We Passed!'
