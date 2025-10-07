export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeEstimate: string;
  steps: Step[];
}

export interface Step {
  id: number;
  title: string;
  description: string;
  warning?: string;
  image?: string;
}

export interface Appliance {
  id: string;
  name: string;
  icon: string;
  description: string;
  problems: Problem[];
}

export const appliances: Appliance[] = [
  {
    id: 'refrigerator',
    name: 'Refrigerator',
    icon: '❄️',
    description: 'Fridge and freezer troubleshooting',
    problems: [
      {
        id: 'fridge-not-cooling',
        title: 'Refrigerator Not Cooling',
        description: 'Your fridge is running but not keeping food cold enough.',
        difficulty: 'Medium',
        timeEstimate: '30-45 minutes',
        steps: [
          {
            id: 1,
            title: 'Check the Temperature Settings',
            description: 'Ensure the temperature is set between 37-40°F (3-4°C). Adjust if needed and wait 24 hours.'
          },
          {
            id: 2,
            title: 'Clean the Condenser Coils',
            description: 'Unplug the fridge. Locate coils at the back or bottom. Use a coil brush or vacuum to remove dust and debris.',
            warning: 'Always unplug before cleaning coils to avoid electrical shock.'
          },
          {
            id: 3,
            title: 'Check Door Seals',
            description: 'Inspect rubber gaskets around doors. Clean with warm soapy water. Replace if torn or loose.'
          },
          {
            id: 4,
            title: 'Ensure Proper Airflow',
            description: 'Don\'t overfill the fridge. Keep vents inside clear. Leave space between items for air circulation.'
          },
          {
            id: 5,
            title: 'Test the Evaporator Fan',
            description: 'Open freezer door and listen for fan noise. If silent, the fan motor may need replacement.'
          }
        ]
      },
      {
        id: 'fridge-water-leaking',
        title: 'Water Leaking Inside Fridge',
        description: 'Puddles forming inside or under the refrigerator.',
        difficulty: 'Easy',
        timeEstimate: '15-20 minutes',
        steps: [
          {
            id: 1,
            title: 'Check the Drain Pan',
            description: 'Locate the drain pan underneath the fridge. Empty if full and check for cracks.'
          },
          {
            id: 2,
            title: 'Clear the Defrost Drain',
            description: 'Find the drain hole inside the freezer. Flush with warm water using a turkey baster to clear ice blockage.'
          },
          {
            id: 3,
            title: 'Inspect Water Line',
            description: 'If you have an ice maker, check the water supply line for leaks or loose connections.'
          }
        ]
      }
    ]
  },
  {
    id: 'oven',
    name: 'Oven',
    icon: '🔥',
    description: 'Oven and stove repair guides',
    problems: [
      {
        id: 'oven-not-heating',
        title: 'Oven Not Heating Up',
        description: 'Oven turns on but doesn\'t reach the desired temperature.',
        difficulty: 'Medium',
        timeEstimate: '20-30 minutes',
        steps: [
          {
            id: 1,
            title: 'Check the Heating Element',
            description: 'For electric ovens, inspect the bake element at the bottom. Look for breaks, blisters, or separation.',
            warning: 'Turn off power at the breaker before inspecting elements.'
          },
          {
            id: 2,
            title: 'Test the Igniter (Gas Ovens)',
            description: 'Watch the igniter when oven is turned on. It should glow bright orange/white and ignite gas within 90 seconds.'
          },
          {
            id: 3,
            title: 'Verify Temperature Sensor',
            description: 'Ensure the sensor probe isn\'t touching the oven wall. Test resistance with a multimeter (should be ~1100 ohms at room temp).'
          },
          {
            id: 4,
            title: 'Calibrate Oven Temperature',
            description: 'Use an oven thermometer to check accuracy. Adjust calibration in settings if off by 25-35°F.'
          }
        ]
      }
    ]
  },
  {
    id: 'ac',
    name: 'Air Conditioner',
    icon: '🌡️',
    description: 'AC cooling and maintenance',
    problems: [
      {
        id: 'ac-not-cooling',
        title: 'AC Not Blowing Cold Air',
        description: 'Air conditioner is running but air isn\'t cold.',
        difficulty: 'Easy',
        timeEstimate: '15-25 minutes',
        steps: [
          {
            id: 1,
            title: 'Replace Air Filter',
            description: 'Turn off AC. Remove and replace dirty air filter. Filters should be changed every 1-3 months.'
          },
          {
            id: 2,
            title: 'Check Thermostat Settings',
            description: 'Set to COOL mode. Temperature should be lower than room temp. Try lowering by 5 degrees.'
          },
          {
            id: 3,
            title: 'Clean the Outdoor Unit',
            description: 'Remove debris, leaves, and dirt around outdoor condenser. Ensure 2 feet clearance on all sides.'
          },
          {
            id: 4,
            title: 'Inspect Circuit Breaker',
            description: 'Check if AC circuit breaker has tripped. Reset if needed. If it trips again, call a professional.'
          }
        ]
      }
    ]
  },
  {
    id: 'computer',
    name: 'Computer',
    icon: '💻',
    description: 'PC and laptop troubleshooting',
    problems: [
      {
        id: 'computer-slow',
        title: 'Computer Running Slow',
        description: 'PC or laptop is sluggish and takes forever to open programs.',
        difficulty: 'Easy',
        timeEstimate: '30-40 minutes',
        steps: [
          {
            id: 1,
            title: 'Check Startup Programs',
            description: 'Open Task Manager (Ctrl+Shift+Esc). Go to Startup tab. Disable unnecessary programs from auto-starting.'
          },
          {
            id: 2,
            title: 'Free Up Disk Space',
            description: 'Run Disk Cleanup. Delete temporary files, empty recycle bin. Uninstall unused programs.'
          },
          {
            id: 3,
            title: 'Scan for Malware',
            description: 'Run a full system scan with your antivirus software. Remove any detected threats.'
          },
          {
            id: 4,
            title: 'Update Operating System',
            description: 'Install all pending Windows/macOS updates. Restart after updating.'
          },
          {
            id: 5,
            title: 'Check RAM Usage',
            description: 'In Task Manager, check memory usage. If consistently above 80%, consider upgrading RAM.'
          }
        ]
      },
      {
        id: 'computer-wont-start',
        title: 'Computer Won\'t Turn On',
        description: 'Pressing power button does nothing or computer doesn\'t boot.',
        difficulty: 'Medium',
        timeEstimate: '20-30 minutes',
        steps: [
          {
            id: 1,
            title: 'Check Power Connections',
            description: 'Ensure power cable is firmly connected to computer and wall outlet. Try a different outlet.'
          },
          {
            id: 2,
            title: 'Test the Power Supply',
            description: 'Check if power supply fan spins when you press power button. Look for any LED lights on motherboard.'
          },
          {
            id: 3,
            title: 'Remove External Devices',
            description: 'Disconnect all USB devices, external drives. Try booting with only keyboard and monitor connected.'
          },
          {
            id: 4,
            title: 'Reset CMOS Battery',
            description: 'For desktops, open case and remove the coin-sized CMOS battery. Wait 5 minutes, then replace it.',
            warning: 'Unplug computer before opening the case.'
          }
        ]
      }
    ]
  },
  {
    id: 'fan',
    name: 'Ceiling Fan',
    icon: '🌀',
    description: 'Fan installation and repair',
    problems: [
      {
        id: 'fan-wobbling',
        title: 'Ceiling Fan Wobbling',
        description: 'Fan shakes or wobbles when running.',
        difficulty: 'Easy',
        timeEstimate: '15-20 minutes',
        steps: [
          {
            id: 1,
            title: 'Tighten All Screws',
            description: 'Turn off fan. Check and tighten blade bracket screws, canopy screws, and motor housing screws.'
          },
          {
            id: 2,
            title: 'Balance the Blades',
            description: 'Use a balancing kit (small weights). Attach clip to blade edges one at a time to find which blade causes wobble.'
          },
          {
            id: 3,
            title: 'Check Blade Alignment',
            description: 'Measure from ceiling to blade tip for each blade. All should be within 1/8 inch of each other.'
          },
          {
            id: 4,
            title: 'Secure the Mounting Bracket',
            description: 'Ensure the ceiling mounting bracket is firmly attached to a structural beam or electrical box.'
          }
        ]
      }
    ]
  },
  {
    id: 'switchboard',
    name: 'Switchboard',
    icon: '⚡',
    description: 'Electrical panel and switches',
    problems: [
      {
        id: 'breaker-keeps-tripping',
        title: 'Circuit Breaker Keeps Tripping',
        description: 'A circuit breaker repeatedly trips and won\'t stay on.',
        difficulty: 'Medium',
        timeEstimate: '25-35 minutes',
        steps: [
          {
            id: 1,
            title: 'Reduce the Load',
            description: 'Unplug devices on that circuit. Turn off lights. Try resetting breaker with reduced load.',
            warning: 'Never replace a breaker with a higher amperage rating.'
          },
          {
            id: 2,
            title: 'Check for Short Circuits',
            description: 'Inspect outlets and switches on the circuit for burn marks, buzzing sounds, or burning smells.'
          },
          {
            id: 3,
            title: 'Test Each Device',
            description: 'With breaker off, unplug everything. Reset breaker. Plug in devices one at a time to find the culprit.'
          },
          {
            id: 4,
            title: 'Inspect the Breaker',
            description: 'If problem persists, the breaker itself may be faulty and need replacement by an electrician.'
          }
        ]
      }
    ]
  },
  {
    id: 'lights',
    name: 'Lights',
    icon: '💡',
    description: 'Lighting fixtures and bulbs',
    problems: [
      {
        id: 'light-flickering',
        title: 'Light Flickering',
        description: 'Light bulb or fixture flickers or dims intermittently.',
        difficulty: 'Easy',
        timeEstimate: '10-15 minutes',
        steps: [
          {
            id: 1,
            title: 'Tighten the Bulb',
            description: 'Turn off light. Once cool, gently tighten the bulb. Loose bulbs are the most common cause.'
          },
          {
            id: 2,
            title: 'Replace the Bulb',
            description: 'If bulb is old or damaged, replace it with a new one of the same wattage.'
          },
          {
            id: 3,
            title: 'Check the Switch',
            description: 'Toggle the switch. If it feels loose or makes crackling sounds, the switch may need replacement.',
            warning: 'Turn off power at breaker before replacing switches.'
          },
          {
            id: 4,
            title: 'Inspect Connections',
            description: 'For persistent issues, the fixture wiring may be loose. This requires an electrician.'
          }
        ]
      }
    ]
  }
];
