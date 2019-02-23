
class Robot:
    all_robots = []

    def __init__(self, new_name, attack=2):
        self.name = new_name
        self.life = 10
        self.attack_power = attack
        Robot.all_robots.append(self)

    @classmethod
    def one_thousand_years(cls):
        for current_robot in cls.all_robots:
            current_robot.take_damage(1)

    def talk(self, message):
        print("Hello! My name is {}. {}".format(self.name, message))

    def fight(self, opponent):
        print("{} is fighting {}.".format(self.name, opponent.name))
        opponent.take_damage(self.attack_power)
        self.status()
        opponent.status()

    def take_damage(self, amount):
        self.life -= amount

    def status(self):
        print("{}: {}".format(self.name, self.life))


robot1 = Robot('Darius')
print(robot1)

print(robot1.name)
print(robot1.life)

robot2 = Robot('Lucius', 3)
print(robot2.name)
print(robot2.life)

robot1.talk("I think you're really great.")

robot1.fight(robot2)
robot2.fight(robot1)

# robot2.life -= 1 # <-- avoid doing this when possible!
# print(robot2.life)

print(Robot.all_robots)

Robot.one_thousand_years()

robot1.status()
robot2.status()

Robot.one_thousand_years()

robot1.status()
robot2.status()

Robot.one_thousand_years()

robot1.status()
robot2.status()


class BattleBot(Robot):

    def __init__(self, name):
        print("I AM BATTLEBOT.")
        super().__init__(name, 6)

    def talk(self):
        print("I CAN NO TALK. I AM BATTLEBOT.")
        # super().talk("")


class PeaceBot(Robot):

    def fight(self):
        print("I don't fight. I am a peace bot.")


class TraitorousPeaceBot(PeaceBot):

    def fight(self, opponent):
        super().super().fight(opponent)



print('---')
robot3 = BattleBot('Battlemeister')
robot3.fight(robot1)
robot3.talk()


robot4 = PeaceBot("Happy Time Bot")
robot4.fight(robot3)

robot5 = TraitorousPeaceBot("Traitor")
robot5.fight(robot4)



#
