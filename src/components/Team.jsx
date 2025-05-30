import React from 'react';
import Scott from '../assets/images/Scott.jpg';
import Don from '../assets/images/Don.jpg';
import Shawn from '../assets/images/Shawn.jpg';
import '../assets/css/styles.css';

const team = [
  {
    name: 'SCOTT COPELAND',
    img: Scott,
    role: 'Inventor',
    desc: [
      'Experienced technology inventor of Security and Hacking',
      'Technology development track record',
    ],
  },
  {
    name: 'DON McCARTHY',
    img: Don,
    role: 'CEO',
    desc: [
      'Experienced product development and manufacturing',
      'Outstanding track record of delivery',
      'Right skills and experience to move product development forward',
      'Right vision for and experience to lead operations',
    ],
  },
  {
    name: 'SHAWN McCARTHY',
    img: Shawn,
    role: 'CTO',
    desc: [
      'Experienced Senior-level IT executive with over 18 years experience whose passion is to inspire growth',
    ],
  },
];

const Team = () => (
  <section className="section-space team gray">
    <div className="container">
      <div className="row">
        <div className="col-md-12 center">
          <h2 className="section-heading mb-40">Meet Our Team</h2>
        </div>
      </div>
      <div className="row">
        {team.map((member) => (
          <div className="col-md-4 col-sm-4" key={member.name}>
            <div className="thumbnail">
              <div className="caption-img"><img src={member.img} alt={member.name} /></div>
              <div className="caption">
                <div className="member-name">{member.name}</div>
                <div className="desc">
                  <span className="designation">{member.role}</span>
                  <ul className="aboutteam">
                    {member.desc.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
