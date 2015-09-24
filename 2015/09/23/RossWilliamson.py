#!/bin/python

import unittest
from test import test_support

class Queue(object):
  def __init__(self):
    self.queue = []

  def add(self, el):
    self.queue.append(el)

  def poll(self):
    return self.queue.pop(0)

  def empty(self):
    return len(self.queue) == 0

class Stack(object):
  def __init__(self):
    self.queue1 = Queue()
    self.queue2 = Queue()

  def push(self, el):
    self.queue1.add(el)

  def pop(self):
    returnEl = None
    if self.queue1.empty() and self.queue2.empty():
      return None

    full_queue = self.queue1
    empty_queue = self.queue2
    if self.queue1.empty():
      full_queue = self.queue2
      empty_queue = self.queue1

    while True:
      el = full_queue.poll()
      if full_queue.empty():
        returnEl = el
        break
      empty_queue.add(el)
    return returnEl

class TestStack(unittest.TestCase):

  def test_one(self):
    s = Stack()
    s.push(5)
    s.push(4)
    s.push(3)
    s.push(7)
    s.push(8)

    s.push(9)

    self.assertEqual(9, s.pop())
    self.assertEqual(8, s.pop())
    self.assertEqual(7, s.pop())
    self.assertEqual(3, s.pop())
    self.assertEqual(4, s.pop())
    self.assertEqual(5, s.pop())

    s.push(1)
    self.assertEqual(1, s.pop())
    s.push(1337)
    self.assertEqual(1337, s.pop())


if __name__ == '__main__':
   test_support.run_unittest(TestStack)
   