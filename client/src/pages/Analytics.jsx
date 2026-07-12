import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import {
  BarChart3,
  Truck,
  Fuel,
  Wrench,
  TrendingUp,
  Activity,
} from "lucide-react";

export default function Analytics() {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Analytics Dashboard"
        subtitle="Monitor fleet performance and operational insights"
      />

      {/* KPI Cards */}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <Card className="p-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Fleet Utilization</p>
              <h2 className="text-3xl font-bold mt-2">87%</h2>
            </div>

            <Truck className="text-blue-600" size={34} />
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Fuel Efficiency</p>
              <h2 className="text-3xl font-bold mt-2">
                14.8 km/L
              </h2>
            </div>

            <Fuel className="text-green-600" size={34} />
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Maintenance Cost</p>
              <h2 className="text-3xl font-bold mt-2">
                ₹2.45L
              </h2>
            </div>

            <Wrench className="text-orange-500" size={34} />
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Monthly Growth</p>
              <h2 className="text-3xl font-bold mt-2">
                +18%
              </h2>
            </div>

            <TrendingUp className="text-purple-600" size={34} />
          </div>
        </Card>

      </div>

      {/* Charts Placeholder */}

      <div className="grid lg:grid-cols-2 gap-6">

        <Card className="p-6">

          <div className="flex items-center gap-2 mb-6">
            <BarChart3 size={22} />
            <h2 className="text-xl font-bold">
              Monthly Trips
            </h2>
          </div>

          <div className="space-y-4">

            {[
              ["Jan",70],
              ["Feb",82],
              ["Mar",90],
              ["Apr",78],
              ["May",95],
              ["Jun",88],
            ].map(([month,value])=>(
              <div key={month}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{month}</span>
                  <span>{value}%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{width:`${value}%`}}
                  />
                </div>

              </div>
            ))}

          </div>

        </Card>

        <Card className="p-6">

          <div className="flex items-center gap-2 mb-6">
            <Activity size={22} />
            <h2 className="text-xl font-bold">
              Fleet Status
            </h2>
          </div>

          <div className="space-y-5">

            {[
              ["Available",68,"bg-green-500"],
              ["On Trip",22,"bg-blue-500"],
              ["Maintenance",8,"bg-yellow-500"],
              ["Inactive",2,"bg-red-500"],
            ].map(([label,value,color])=>(
              <div key={label}>

                <div className="flex justify-between mb-1">
                  <span>{label}</span>
                  <span>{value}%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">

                  <div
                    className={`${color} h-3 rounded-full`}
                    style={{width:`${value}%`}}
                  />

                </div>

              </div>
            ))}

          </div>

        </Card>

      </div>

      {/* Bottom Cards */}

      <div className="grid lg:grid-cols-3 gap-6">

        <Card className="p-6">

          <h2 className="font-bold text-lg mb-5">
            Top Performing Drivers
          </h2>

          <div className="space-y-4">

            {[
              ["Rahul Patel","98%"],
              ["Aman Shah","95%"],
              ["Neha Verma","92%"],
            ].map((driver)=>(
              <div
                key={driver[0]}
                className="flex justify-between border-b pb-2"
              >
                <span>{driver[0]}</span>
                <span className="font-semibold">
                  {driver[1]}
                </span>
              </div>
            ))}

          </div>

        </Card>

        <Card className="p-6">

          <h2 className="font-bold text-lg mb-5">
            Fuel Consumption
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>This Week</span>
              <strong>1,240 L</strong>
            </div>

            <div className="flex justify-between">
              <span>This Month</span>
              <strong>5,860 L</strong>
            </div>

            <div className="flex justify-between">
              <span>Average / Day</span>
              <strong>194 L</strong>
            </div>

          </div>

        </Card>

        <Card className="p-6">

          <h2 className="font-bold text-lg mb-5">
            System Overview
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Total Vehicles</span>
              <strong>120</strong>
            </div>

            <div className="flex justify-between">
              <span>Drivers</span>
              <strong>98</strong>
            </div>

            <div className="flex justify-between">
              <span>Active Trips</span>
              <strong>24</strong>
            </div>

            <div className="flex justify-between">
              <span>Revenue</span>
              <strong>₹18.6L</strong>
            </div>

          </div>

        </Card>

      </div>

    </div>
  );
}