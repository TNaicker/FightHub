from ctypes import addressof
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base

l = []

engine = create_engine(
'postgresql://localhost/clone_fight_hub', convert_unicode=True, echo=False
)
Base = declarative_base()
Base.metadata.reflect(engine)


from sqlalchemy.orm import relationship, backref

class Character(Base):
    __table__ = Base.metadata.tables['characters']


if __name__ == '__main__':
    from sqlalchemy.orm import scoped_session, sessionmaker, Query
    db_session = scoped_session(sessionmaker(bind=engine))
    for item in db_session.query(Character):
        l.append(item)
        print item

from flask import Flask, jsonify
app = Flask(__name__)
app.config['DEBUG'] = True

class Character:
    def __init__(self, obj):
        self.id = obj.id
        self.character_name = obj.character_name
        self.game_id = obj.game_id
        self.summary = obj.summary
        self.defense_modifier = obj.defense_modifier
        self.guts = obj.guts
        self.weight = obj.weight
        self.stun_resistance = obj.stun_resistance
        self.RISC_intertia = obj.RISC_intertia
        self.RISC_gain = obj.RISC_gain
        self.jump_startup = obj.jump_startup
        self.backdash_startup = obj.backdash_startup
        self.backdash_invulnerability = obj.backdash_invulnerability
        self.img_url = obj.img_url

test = Character(l[1])
test2 = Character(l[2])



@app.route("/")
def hello():
    # return jsonify([{'id': l[1].id},
    # {'character_name': l[1].character_name},
    # {'game_id': l[1].game_id},
    # {'summary': l[1].summary},
    # {'defense_modifier': l[1].defense_modifier},
    # {'guts': l[1].guts},
    # {'weight': l[1].weight},
    # {'stun_resistance': l[1].stun_resistance},
    # {'RISC_intertia': l[1].RISC_intertia},
    # {'RISC_gain': l[1].RISC_gain},
    # {'jump_startup': l[1].jump_startup},
    # {'backdash_startup': l[1].backdash_startup},
    # {'backdash_invulnerability': l[1].backdash_invulnerability},
    # {'img_url': l[1].img_url},
    # ])
    return jsonify([
    # Character(l[0]),
    # vars(Character(l[1])),
    # vars(Character(l[2])),
    # vars(Character(l[3])),
    # vars(Character(l[4])),
    # vars(Character(l[5])),
    # vars(Character(l[6])),
    # vars(Character(l[7])),
    # vars(Character(l[8])),
    # vars(Character(l[9])),
    # vars(Character(l[10])),
    ])

if __name__ == '__main__':
    app.run()
