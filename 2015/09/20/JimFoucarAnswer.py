def compute_all_results_mine(the_string):
  results = [“0”, “1”] if the_string[0] == “?” else [the_string[0]]

  for char in the_string[1:]:
    if (char == “?”):
      results = results * 2
      for idx in xrange(len(results)):
        if (idx < len(results) / 2):
          results[idx] += "0"
        else:
          results[idx] += "1"
    else:
      for idx in xrange(len(results)):
        results[idx] += char

  return results
