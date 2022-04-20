class Stack:
  def __init__(self, data = []):
    self.data = data
  
  def push(self, value):
    return self.data.append(value)
  
  def pop(self):
    self.data.pop()
    return self.data 

  def peek(self, index = 0):
    return self.data[index]

  def length(self):
    return len(self.data)

  def __repr__(self):
    return 'Stack: { %s } ' % ' | '.join(str(v) for v in self.data)
  