import { LucideIcon } from 'lucide-react';
import React, { JSX } from 'react'


type StatDetail = {
    title: string;
    amount: string;
    changePercentage: number;
    IconComponent: LucideIcon
}
type StatCardProps = {
    title: string;
    primaryIcon: JSX.Element;
    details: StatDetail[];
    dateRange: string
}

const StatCard = ({title,
    primaryIcon,
    details,
    dateRange,}: StatCardProps) => {
  return (
    <div>StatCard</div>
  )
}

export default StatCard