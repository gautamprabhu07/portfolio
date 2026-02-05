'use client';
// app/(in-progress)/contact/_components/location/index.jsx
import { motion } from 'framer-motion';
import { Clock, MapPin, Wifi } from 'lucide-react';


import {
  
    InfoCard,
  InfoGrid,
  InfoIcon,
  InfoLabel,
  InfoValue,
  LocationSubtext,
  LocationTitle,
  LocationWrapper,
  

  SectionTitle,
} from './location.styled';

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15 * i,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
};

const reveal = {
  initial: { y: '100%' },
  open: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const infoItems = [
  {
    icon: Clock,
    label: 'Availability',
    value: 'Immediate',
  },
  {
    icon: Wifi,
    label: 'Work Mode',
    value: 'Remote / Hybrid / On-site',
  },
];

export function ContactLocation() {
  return (
    <LocationWrapper>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      >
        <div style={{ overflow: 'hidden', marginBottom: '3rem' }}>
          <motion.div variants={reveal} initial='initial' whileInView='open' viewport={{ once: true }}>
            <SectionTitle>Location & Availability</SectionTitle>
          </motion.div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '3rem' }}>
          <MapPin size={32} strokeWidth={1.5} className='text-primary' style={{ flexShrink: 0, marginTop: '0.25rem' }} />
          <div>
            <LocationTitle>Based in Manipal, Karnataka, India</LocationTitle>
            <LocationSubtext>Open to opportunities across India and remote positions globally</LocationSubtext>
          </div>
        </div>

        <InfoGrid>
          {infoItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.label}
                custom={index}
                variants={cardVariants}
                initial='initial'
                whileInView='open'
                viewport={{ once: true }}
              >
                <InfoCard
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                >
                  <InfoIcon>
                    <IconComponent size={24} strokeWidth={1.5} />
                  </InfoIcon>
                  <InfoLabel>{item.label}</InfoLabel>
                  <InfoValue>{item.value}</InfoValue>
                </InfoCard>
              </motion.div>
            );
          })}
        </InfoGrid>
      </motion.div>
    </LocationWrapper>
  );
}