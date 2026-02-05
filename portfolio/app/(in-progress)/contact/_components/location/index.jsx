'use client';
// app/(in-progress)/contact/_components/location/index.jsx
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';


import {
  InfoCard,
  InfoGrid,
  InfoLabel,
  InfoValue,
  LocationIcon,
  LocationInfo,
  LocationSubtext,
  LocationTitle,
  LocationWrapper,
  
} from './location.styled';

export function ContactLocation() {
  return (
    <LocationWrapper>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <LocationIcon
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MapPin size={32} strokeWidth={2.5} />
        </LocationIcon>
        
        <LocationTitle>Based in Manipal, Karnataka, India</LocationTitle>
        <LocationSubtext>Open to remote, hybrid, and on-site opportunities</LocationSubtext>
        
        <InfoGrid>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <InfoCard>
              <Clock size={20} className='text-primary' />
              <InfoLabel>Availability</InfoLabel>
              <InfoValue>Immediate start</InfoValue>
            </InfoCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <InfoCard>
              <MapPin size={20} className='text-primary' />
              <InfoLabel>Work Preference</InfoLabel>
              <InfoValue>Flexible</InfoValue>
            </InfoCard>
          </motion.div>
        </InfoGrid>
      </motion.div>
    </LocationWrapper>
  );
}