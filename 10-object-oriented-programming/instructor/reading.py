class Reading:
    """ A class to represent an atmospheric pressure reading from a smartphone """

    def __init__(self, observation_unit, value, model, latitude, longitude, altitude):
        self.observation_unit = observation_unit
        self.value = value
        self.latitude = latitude
        # ...

    def to_atm(self):
        if self.observation_unit == 'atm':
          return self.value
        elif self.observation_unit == 'mbar':
          return self.value * 1013.25

reading1 = Reading('mbar', 100, 43, 79, 100)
reading1.to_atm()
