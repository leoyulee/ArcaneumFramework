"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8785],{72346:function(e){e.exports=JSON.parse('{"functions":[{"name":"ProduceCoefficients","desc":"A function that returns the values of coefficients required to identify the polynomials of an equation\\nand find the solutions to said polynomials.\\n\\nProcess found here: https://docs.google.com/document/d/1TKhiXzLMHVjDPX3a3U0uMvaiW1jWQWUmYpICjIDeMSA/edit","params":[{"name":"ProjectileSpeed","desc":"The speed that the projectile will have when fired.","lua_type":"number"},{"name":"DeltaPosition","desc":"The overall position where the shooter\'s at (0,0,0).","lua_type":"Vector3"},{"name":"DeltaVelocity","desc":"The overall velocity where the shooter\'s at (0,0,0).","lua_type":"Vector3?"},{"name":"DeltaAcceleration","desc":"The overall acceleration where the shooter\'s at (0,0,0).","lua_type":"Vector3?"},{"name":"DeltaJerk","desc":"The overall jerk where the shooter\'s at (0,0,0).","lua_type":"Vector3?"}],"returns":[{"desc":"Returns the coefficients in the format of T0, T1, T2, T3, T4, T5, T6, where: T0 + T1x + T2x^2 + T3x^3 + T4x^4 + T5x^5 + T6x^6 = 0","lua_type":"number, number?, number?, number?, number?, number?, number?"}],"function_type":"method","private":true,"source":{"line":40,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"GetRoot","desc":"A workaround function to address how odd roots of a negative returns NaN when they should be returning a negative odd-rooted number.","params":[{"name":"n","desc":"The number of which the root will be applied to (n^root).","lua_type":"number"},{"name":"root","desc":"The number of the root (n^root). By default is equal to 2.","lua_type":"number?"}],"returns":[{"desc":"Returns the result of n^root. Returns NaN if the root is even and n is negative.","lua_type":"number"}],"function_type":"method","private":true,"source":{"line":96,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"SolvePolynomial","desc":"A function that solves a polynomial given its coefficients up to the fourth power (T0 + T1x + T2x^2 + T3x^3 + T4x^4 = 0).","params":[{"name":"T0","desc":"The first coefficient of the polynomial. T0 in T0 + T1x + T2x^2 + T3x^3 + T4x^4 = 0","lua_type":"number"},{"name":"T1","desc":"The second coefficient of the polynomial. T1 in T0 + T1x + T2x^2 + T3x^3 + T4x^4 = 0","lua_type":"number"},{"name":"T2","desc":"The third coefficient of the polynomial. T2 in T0 + T1x + T2x^2 + T3x^3 + T4x^4 = 0","lua_type":"number"},{"name":"T3","desc":"The fourth coefficient of the polynomial. T3 in T0 + T1x + T2x^2 + T3x^3 + T4x^4 = 0","lua_type":"number"},{"name":"T4","desc":"The fifth coefficient of the polynomial. T4 in T0 + T1x + T2x^2 + T3x^3 + T4x^4 = 0","lua_type":"number"}],"returns":[{"desc":"Returns all possible solutions of the given polynomial, up to four solutions.","lua_type":"number, number?, number?, number?"}],"function_type":"method","private":true,"source":{"line":121,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"ProduceDeltas","desc":"A short function that finds the overall vector between two Vector3s (Final Vector - Initial Vector).","params":[{"name":"Target","desc":"The vector3 of the target. By default Vector3.new(0,0,0).","lua_type":"Vector3?"},{"name":"Shooter","desc":"The vector3 of the shooter. By default Vector3.new(0,0,0).","lua_type":"Vector3?"}],"returns":[{"desc":"The resulting Vector3 of (Target - Shooter).","lua_type":"Vector3"}],"function_type":"method","private":true,"source":{"line":358,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"ProduceDerivative","desc":"A function that returns the derivative of a polynomial, given its coefficients.","params":[{"name":"...","desc":"The coefficients of the polynomial. T0, T1, T2, T3, T4, ..., Tn, where: T0 + T1x + T2x^2 + T3x^3 + T4x^4 + ... + Tn^n = 0","lua_type":"number"}],"returns":[{"desc":"The coefficients of the derviative polynomial from the initial polynomial.","lua_type":"...number"}],"function_type":"method","private":true,"source":{"line":373,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"InputPolynomial","desc":"A function that returns the result of pluging in Input into a polynomial, given its coefficients. It can also evaluate the limit of positive and negative math.huge (infinity) if the Input is set to be that.","params":[{"name":"Input","desc":"The number that will be put into the given polynomial. Can be math.huge (infinity).","lua_type":"number"},{"name":"...","desc":"The coefficients of the polynomial. T0, T1, T2, T3, T4, ..., Tn, where: T0 + T1x + T2x^2 + T3x^3 + T4x^4 + ... + Tn^n = 0","lua_type":"number"}],"returns":[{"desc":"The result of plugging in Input into the given polynomial.","lua_type":"number"}],"function_type":"method","private":true,"source":{"line":392,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"CompareNumbers","desc":"A function that returnsif two numbers are within a given range of precision.","params":[{"name":"N1","desc":"The first number.","lua_type":"number"},{"name":"N2","desc":"The second number.","lua_type":"number"},{"name":"Precision","desc":"The desired range of precision that the numbers should be in. This number will be divided by 2 and added/subtracted to the first number to check to see if the second number is inbetween it. By default is set to [BallisticUtilities.Precision].","lua_type":"number?"}],"returns":[{"desc":"The result of plugging in Input into the given polynomial.","lua_type":"boolean"}],"function_type":"method","private":true,"source":{"line":423,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"ProduceEstimate","desc":"A function that recursively calls itself to figure out where inbetween Point1 and Point2 it equals 0 within the range of [BallisticUtilities.Precision]. It performs the Bisection method to do this. If either point is equal to math.huge (infinity), it will replace it with [BallisticUtilities.MaxNumber].","params":[{"name":"Point1","desc":"One critical point of which should be a min/max.","lua_type":"number"},{"name":"Point2","desc":"Another critical poit of which should be a min/max.","lua_type":"number"},{"name":"...","desc":"The coefficients of the polynomial. T0, T1, T2, T3, T4, ..., Tn, where: T0 + T1x + T2x^2 + T3x^3 + T4x^4 + ... + Tn^n = 0","lua_type":"number"}],"returns":[{"desc":"The result of plugging in Input into the given polynomial.","lua_type":"number"}],"function_type":"method","private":true,"source":{"line":442,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"RemoveDuplicatesFromArray","desc":"A function that creates a new array which only contains unique values.","params":[{"name":"InputArray","desc":"The array of which should be pruned of duplicates.","lua_type":"Array<any>"}],"returns":[{"desc":"The result of plugging in Input into the given polynomial.","lua_type":"Array<any>"}],"function_type":"method","private":true,"source":{"line":516,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"ProduceCriticalPoints","desc":"A function that finds and returns the values where a relative/absolute max/min occurs in the polynomial.\\nIf the polynomial is a quartic or lower, it will use the general formula in SolvePolynomial.\\nOtherwise, it will perform the bisection method via ProduceEstimate.","params":[{"name":"...","desc":"The coefficients of the polynomial. T0, T1, T2, T3, T4, ..., Tn, where: T0 + T1x + T2x^2 + T3x^3 + T4x^4 + ... + Tn^n = 0","lua_type":"number"}],"returns":[{"desc":"The critical points of the given polynomial.","lua_type":"...number"}],"function_type":"method","private":true,"source":{"line":536,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"GetEstimate","desc":"A function that finds and returns the solutions to the inputted polynomial which doesn\'t have a general formula with critical points and the bisection method.","params":[{"name":"...","desc":"The coefficients of the polynomial that needs to be solved. T0, T1, T2, T3, T4, ..., Tn, where: T0 + T1x + T2x^2 + T3x^3 + T4x^4 + ... + Tn^n = 0","lua_type":"number"}],"returns":[{"desc":"The solutions of the given polynomial.","lua_type":"...number"}],"function_type":"method","private":true,"source":{"line":574,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"ReturnHitInfo","desc":"An internal function that computes the LookVector and HitPosition from the given results and variables.","params":[{"name":"results","desc":"An array that contains solutions from either GetHitTimes or GetHitTimesWithJerk.","lua_type":"Array<number>"},{"name":"ProjectileSpeed","desc":"The initial speed of the projectile.","lua_type":"number"},{"name":"ShooterPosition","desc":"The (initial) position of the projectile/shooter.","lua_type":"Vector3"},{"name":"ShooterVelocity","desc":"The (initial) velocity of the projectile/shooter.","lua_type":"Vector3?"},{"name":"ShooterAcceleration","desc":"The (initial) acceleration of the projectile/shooter.","lua_type":"Vector3?"},{"name":"ShooterJerk","desc":"The jerk (rate of change of acceleration) of the projectile/shooter.","lua_type":"Vector3?"},{"name":"TargetPosition","desc":"The (initial) position of the target.","lua_type":"Vector3"},{"name":"TargetVelocity","desc":"The (initial) velocity of the target.","lua_type":"Vector3?"},{"name":"TargetAcceleration","desc":"The (initial) velocity of the target.","lua_type":"Vector3?"},{"name":"TargetJerk","desc":"The jerk (rate of change of acceleration) of the target.","lua_type":"Vector3?"}],"returns":[{"desc":"Returns nil if there isn\'t a valid hit direction.","lua_type":"LookVector?, AverageHitPosition?, PositionAccuracy?, SimulatedHitPosition?, ProjectedHitPosition?"}],"function_type":"static","private":true,"source":{"line":645,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"GetHitInfo","desc":"A function that computes the LookVector and HitPosition from ProjectileSpeed, Positions, Velocities, and Acceleration. Refer to [BallisticsFunctions:GetHitInfoWithJerk] to compute with Jerk.","params":[{"name":"ProjectileSpeed","desc":"The initial speed of the projectile.","lua_type":"number"},{"name":"ShooterPosition","desc":"The (initial) position of the projectile/shooter.","lua_type":"Vector3"},{"name":"ShooterVelocity","desc":"The (initial) velocity of the projectile/shooter.","lua_type":"Vector3?"},{"name":"ShooterAcceleration","desc":"The (initial) acceleration of the projectile/shooter.","lua_type":"Vector3?"},{"name":"TargetPosition","desc":"The (initial) position of the target.","lua_type":"Vector3"},{"name":"TargetVelocity","desc":"The (initial) velocity of the target.","lua_type":"Vector3?"},{"name":"TargetAcceleration","desc":"The (initial) velocity of the target.","lua_type":"Vector3?"}],"returns":[{"desc":"Returns nil if there isn\'t a valid hit direction.","lua_type":"LookVector?, AverageHitPosition?, PositionAccuracy?, SimulatedHitPosition?, ProjectedHitPosition?"}],"function_type":"method","tags":["Untested"],"since":"v0.2.1","source":{"line":700,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"GetHitInfoWithJerk","desc":"A function that computes the LookVector and HitPosition from ProjectileSpeed, Positions, Velocities, Acceleration, and Jerk.","params":[{"name":"ProjectileSpeed","desc":"The initial speed of the projectile.","lua_type":"number"},{"name":"ShooterPosition","desc":"The (initial) position of the projectile/shooter.","lua_type":"Vector3"},{"name":"ShooterVelocity","desc":"The (initial) velocity of the projectile/shooter.","lua_type":"Vector3?"},{"name":"ShooterAcceleration","desc":"The (initial) acceleration of the projectile/shooter.","lua_type":"Vector3?"},{"name":"ShooterJerk","desc":"The jerk (rate of change of acceleration) of the projectile/shooter.","lua_type":"Vector3?"},{"name":"TargetPosition","desc":"The (initial) position of the target.","lua_type":"Vector3"},{"name":"TargetVelocity","desc":"The (initial) velocity of the target.","lua_type":"Vector3?"},{"name":"TargetAcceleration","desc":"The (initial) velocity of the target.","lua_type":"Vector3?"},{"name":"TargetJerk","desc":"The jerk (rate of change of acceleration) of the target.","lua_type":"Vector3?"}],"returns":[{"desc":"Returns nil if there isn\'t a valid hit direction.","lua_type":"LookVector?, AverageHitPosition?, PositionAccuracy?, SimulatedHitPosition?, ProjectedHitPosition?"}],"function_type":"method","tags":["Untested"],"since":"v0.2.1","source":{"line":720,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"GetHitTimes","desc":"A function that computes the times of collision from ProjectileSpeed, Positions, Velocities, and Acceleration. Refer to [BallisticsFunctions:GetHitTimesWithJerk] to compute with Jerk.","params":[{"name":"ProjectileSpeed","desc":"The initial speed of the projectile.","lua_type":"number"},{"name":"ShooterPosition","desc":"The (initial) position of the projectile/shooter.","lua_type":"Vector3"},{"name":"ShooterVelocity","desc":"The (initial) velocity of the projectile/shooter.","lua_type":"Vector3?"},{"name":"ShooterAcceleration","desc":"The (initial) acceleration of the projectile/shooter.","lua_type":"Vector3?"},{"name":"TargetPosition","desc":"The (initial) position of the target.","lua_type":"Vector3"},{"name":"TargetVelocity","desc":"The (initial) velocity of the target.","lua_type":"Vector3?"},{"name":"TargetAcceleration","desc":"The (initial) velocity of the target.","lua_type":"Vector3?"}],"returns":[{"desc":"The times of when the projectile and target can collide.","lua_type":"...number"}],"function_type":"method","since":"v0.2.0","source":{"line":759,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"GetHitTimesWithJerk","desc":"A function that computes the times of collision from ProjectileSpeed, Positions, Velocities, Acceleration, and Jerk.","params":[{"name":"ProjectileSpeed","desc":"The initial speed of the projectile.","lua_type":"number"},{"name":"ShooterPosition","desc":"The (initial) position of the projectile/shooter.","lua_type":"Vector3"},{"name":"ShooterVelocity","desc":"The (initial) velocity of the projectile/shooter.","lua_type":"Vector3?"},{"name":"ShooterAcceleration","desc":"The (initial) acceleration of the projectile/shooter.","lua_type":"Vector3?"},{"name":"ShooterJerk","desc":"The jerk (rate of change of acceleration) of the projectile/shooter.","lua_type":"Vector3?"},{"name":"TargetPosition","desc":"The (initial) position of the target.","lua_type":"Vector3"},{"name":"TargetVelocity","desc":"The (initial) velocity of the target.","lua_type":"Vector3?"},{"name":"TargetAcceleration","desc":"The (initial) velocity of the target.","lua_type":"Vector3?"},{"name":"TargetJerk","desc":"The jerk (rate of change of acceleration) of the target.","lua_type":"Vector3?"}],"returns":[{"desc":"The times of when the projectile and target can collide.","lua_type":"...number"}],"function_type":"method","since":"v0.2.0","source":{"line":790,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}}],"properties":[{"name":"Precision","desc":"The target precision used to compare numbers and measure simularity in [BallisticsFunctions:CompareNumbers]. Set to 1e-3 (or 0.001) by default.","lua_type":"number","private":true,"source":{"line":12,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"MaxNumber","desc":"The MaxNumber used to replace infinity (or math.huge) during [BallisticsFunctions:ProduceEstimate]. Set to 2147483646 by default.","lua_type":"number","private":true,"source":{"line":18,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"Utilities","desc":"The BallisticUtilities class of which contains all of the nessessary functions used to create the right data.","lua_type":"BallisticUtilities","private":true,"source":{"line":597,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}}],"types":[{"name":"LookVector","desc":"A unit Vector3 that is equivalent to CFrame.LookVector.","lua_type":"Vector3","source":{"line":608,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"AverageHitPosition","desc":"A Vector3 where the projectile and the target will collide.","lua_type":"Vector3","source":{"line":613,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"PositionAccuracy","desc":"A number that shows how far off the average is from the projected target collision positions due to calculation incaccuracies.","lua_type":"number","source":{"line":618,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"SimulatedHitPosition","desc":"The projected target collision position via: HitPosition = TargetInitialPosition + TargetVelocity*TravelTime + TargetAcceleration/2*TravelTime^2 + TargetJerk/3*TravelTime^3.","lua_type":"Vector3","source":{"line":623,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}},{"name":"ProjectedHitPosition","desc":"The projected projectile collision position via: HitPosition = ShooterInitialPosition + ((SimulationLookVector*ProjectileSpeed + ShooterVelocity)*TravelTime) + ShooterAcceleration/2*TravelTime^2 + ShooterJerk/3*TravelTime^3.","lua_type":"Vector3","source":{"line":628,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}}],"name":"BallisticsFunctions","desc":"The public table that contains the functions for finding the points of collision between two projectiles.","source":{"line":591,"path":"src/ServerStorage/ArcaneumEngine/Global/Ballistics.lua"}}')}}]);