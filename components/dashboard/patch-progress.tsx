'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Pause, Check } from 'lucide-react';

type PatchStatus = 'In Progress' | 'Queued' | 'Completed' | 'Failed';

interface Patch {
    id: string;
    name: string;
    status: PatchStatus;
    progress: number;
    servers: string;
    statusColor: string;
    eta: string;
}

const patches : Patch[] = [
	{
		id: 'PATCH-1234',
		name: 'Security Update KB5023778',
		status: 'In Progress',
		progress: 65,
		servers: '84/128',
		statusColor: 'bg-yellow-500',
		eta: '23 min',
	},
	{
		id: 'PATCH-1235',
		name: 'Linux Kernel Update 5.15.91',
		status: 'Queued',
		progress: 0,
		servers: '0/45',
		statusColor: 'bg-blue-500',
		eta: '1h 12m',
	},
	{
		id: 'PATCH-1236',
		name: 'Apache HTTP Server 2.4.55',
		status: 'Completed',
		progress: 100,
		servers: '37/37',
		statusColor: 'bg-green-500',
		eta: '-',
	},
	{
		id: 'PATCH-1237',
		name: 'Java Runtime 17.0.6',
		status: 'Failed',
		progress: 23,
		servers: '5/22',
		statusColor: 'bg-red-500',
		eta: 'Failed',
	},
];

const statusBadgeMap: Record<string, string> = {
	'In Progress': 'bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30',
	Queued: 'bg-blue-500/20 text-blue-500 hover:bg-blue-500/30',
	Completed: 'bg-green-500/20 text-green-500 hover:bg-green-500/30',
	Failed: 'bg-red-500/20 text-red-500 hover:bg-red-500/30',
};

const actionButtonMap = {
	'In Progress': { icon: Pause, text: 'Pause' },
	Queued: { icon: Play, text: 'Start' },
	Completed: { icon: Check, text: 'View Report' },
	Failed: { icon: Play, text: 'Retry' },
};

export function PatchProgress() {
	return (
		<div className="divide-y divide-border/10">
			{patches.map((patch, index) => {
				const ActionIcon = actionButtonMap[patch.status].icon;
				return (
					<motion.div
						key={patch.id}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: index * 0.1 }}
						className="p-6 hover:bg-primary/5 transition-colors"
					>
						<div className="grid grid-cols-12 gap-4">
							<div className="col-span-12 sm:col-span-6 flex items-start space-x-3">
								<div
									className={`h-3 w-3 rounded-full mt-1.5 flex-shrink-0 ${patch.statusColor}`}
								></div>
								<div>
									<div className="flex items-center space-x-2">
										<p className="font-medium">{patch.name}</p>
										<Badge
											variant="outline"
											className={statusBadgeMap[patch.status]}
										>
											{patch.status}
										</Badge>
									</div>
									<p className="text-xs text-muted-foreground mt-1">
										ID: {patch.id}
									</p>
								</div>
							</div>

							<div className="col-span-12 sm:col-span-3 flex items-center space-x-4">
								<div className="flex-1">
									<Progress
										value={patch.progress}
										className={`h-2 ${
											patch.status === 'Failed'
												? 'bg-muted/50 [&>div]:bg-red-500'
												: patch.status === 'Completed'
												? 'bg-muted/50 [&>div]:bg-green-500'
												: 'bg-muted/50 [&>div]:bg-cyan-500'
										}`}
									/>
									<div className="flex justify-between text-xs text-muted-foreground mt-1">
										<span>{patch.servers} servers</span>
										<span>{patch.progress}%</span>
									</div>
								</div>
							</div>

							<div className="col-span-6 sm:col-span-1 flex items-center">
								<div className="text-sm">
									<span className="text-muted-foreground">ETA:</span>{' '}
									{patch.eta}
								</div>
							</div>

							<div className="col-span-6 sm:col-span-2 flex items-center justify-end">
								<Button
									size="sm"
									variant={
										patch.status === 'Failed'
											? 'destructive'
											: 'outline'
									}
									className="h-8"
								>
									<ActionIcon className="h-3.5 w-3.5 mr-1.5" />
									{actionButtonMap[patch.status].text}
								</Button>
							</div>
						</div>
					</motion.div>
				);
			})}
		</div>
	);
}