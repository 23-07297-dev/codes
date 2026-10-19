window.MOCK_EXAM_DATA = {
  "title": "ICE 409 Mock Exam",
  "defaultMinutes": 120,
  "questions": [
    {
      "id": "m1",
      "number": 1,
      "topic": "docs",
      "part": 1,
      "level": "Apply",
      "prompt": "A field technician must confirm the exact power-supply terminals and DCS channel for LT-207. Which reference should be used first?",
      "choices": [
        "A high-level process flow diagram",
        "The vessel material certificate",
        "The project organization chart",
        "The approved instrument loop diagram"
      ],
      "correct": 3,
      "explanation": "The loop diagram contains detailed signal, power and terminal interconnections. A PFD gives process-level information."
    },
    {
      "id": "m2",
      "number": 2,
      "topic": "docs",
      "part": 1,
      "level": "Apply",
      "prompt": "An engineer is purchasing a transmitter for corrosive fluid. Which document should state its wetted materials and required accuracy?",
      "choices": [
        "The shift log alone",
        "The cable tray loading schedule",
        "The process overview alone",
        "The instrument data sheet"
      ],
      "correct": 3,
      "explanation": "The data sheet specifies the individual device, including materials, accuracy, range, connections and process conditions."
    },
    {
      "id": "m3",
      "number": 3,
      "topic": "docs",
      "part": 1,
      "level": "Apply",
      "prompt": "A new high-high level trip is added. Which documentation response is most complete?",
      "choices": [
        "Revise only the filename of the P&ID",
        "Keep the old trip matrix until the next shutdown regardless of risk",
        "Change the PLC program without recording the change",
        "Review the P&ID, I/O, loop, setpoint and cause-and-effect documents and revise all affected records"
      ],
      "correct": 3,
      "explanation": "An added trip affects the control/safety intent and related hardware/software documents. Keep all affected approved records consistent."
    },
    {
      "id": "m4",
      "number": 4,
      "topic": "docs",
      "part": 1,
      "level": "Apply",
      "prompt": "A pump may run only when level is adequate AND the discharge route is available. Both inputs are true, but an independent active-trip condition also blocks the pump. What is correct?",
      "choices": [
        "Assume a start request cancels every trip",
        "Keep the pump blocked until the trip is resolved under the specified reset procedure",
        "Delete the trip condition from the drawing",
        "Start because two permissives are true"
      ],
      "correct": 1,
      "explanation": "Permissives do not automatically override a separate active trip. The specified interlock and reset behavior must be followed."
    },
    {
      "id": "m5",
      "number": 5,
      "topic": "docs",
      "part": 1,
      "level": "Apply",
      "prompt": "A technician needs the mounting bracket, process tapping, tubing and manifold arrangement for a pressure instrument. Which drawing is best?",
      "choices": [
        "The cybersecurity policy",
        "The software version log",
        "The alarm event list",
        "The instrument hook-up drawing"
      ],
      "correct": 3,
      "explanation": "Hook-up drawings show physical/mechanical installation details. Loop diagrams primarily show signal/electrical interconnections."
    },
    {
      "id": "m6",
      "number": 6,
      "topic": "functional",
      "part": 1,
      "level": "Apply",
      "prompt": "A scenario has initiating frequency 0.4/year and one qualifying IPL with PFD 0.05. What is the frequency before adding the proposed SIF?",
      "choices": [
        "8/year",
        "0.002/year",
        "0.45/year",
        "0.02/year"
      ],
      "correct": 3,
      "explanation": "Multiply: 0.4 × 0.05 = 0.02/year. This assumes the credited layer is appropriate and independent for the scenario."
    },
    {
      "id": "m7",
      "number": 7,
      "topic": "functional",
      "part": 1,
      "level": "Apply",
      "prompt": "A scenario frequency before the SIF is 0.006/year and the tolerable frequency is 0.00002/year. What additional RRF is required?",
      "choices": [
        "3,000",
        "300",
        "30",
        "0.00333"
      ],
      "correct": 1,
      "explanation": "Required RRF = 0.006 / 0.00002 = 300. The corresponding maximum PFDavg is about 0.00333, within the SIL 2 numerical band."
    },
    {
      "id": "m8",
      "number": 8,
      "topic": "functional",
      "part": 1,
      "level": "Apply",
      "prompt": "A low-demand safety function has calculated PFDavg of 0.0006. Which numerical band contains it?",
      "choices": [
        "SIL 2",
        "SIL 3",
        "SIL 1",
        "SIL 4"
      ],
      "correct": 1,
      "explanation": "SIL 3: 10^-4 ≤ PFDavg < 10^-3. Quantitative performance alone is not proof of all SIL requirements."
    },
    {
      "id": "m9",
      "number": 9,
      "topic": "functional",
      "part": 1,
      "level": "Apply",
      "prompt": "A team credits a BPCS shutdown and an alarm as independent layers, but both depend on one transmitter whose failure initiates the scenario. What should the assessor do?",
      "choices": [
        "Reject the assumed independent multiplication and examine the shared failure",
        "Ignore the initiating cause when evaluating independence",
        "Increase the credited risk reduction because the hardware is shared",
        "Multiply both credits automatically because their names differ"
      ],
      "correct": 0,
      "explanation": "Shared equipment and the initiating cause can invalidate independence. Layer credits must be justified for the specific scenario."
    },
    {
      "id": "m10",
      "number": 10,
      "topic": "functional",
      "part": 1,
      "level": "Apply",
      "prompt": "A HAZOP team applies the guide word Reverse to the parameter Flow. Which deviation should it study?",
      "choices": [
        "Flow in the unintended direction",
        "Every software coding error regardless of process node",
        "Flow at the intended direction and intended rate only",
        "The total number of instruments on the site"
      ],
      "correct": 0,
      "explanation": "Guide word plus parameter creates a deviation: Reverse + Flow means reverse flow. The team studies causes, consequences and safeguards."
    },
    {
      "id": "m11",
      "number": 11,
      "topic": "functional",
      "part": 1,
      "level": "Apply",
      "prompt": "Which assessment should be reconsidered when a low-demand function is changed to operate continuously?",
      "choices": [
        "Whether the site has a printer",
        "The age of the cable schedule only",
        "Use of PFDavg alone as the applicable quantitative metric",
        "The spelling of the instrument tag alone"
      ],
      "correct": 2,
      "explanation": "High-demand/continuous operation uses PFH rather than treating low-demand PFDavg as sufficient. Reassess the operating mode and requirements."
    },
    {
      "id": "m12",
      "number": 12,
      "topic": "sis",
      "part": 1,
      "level": "Apply",
      "prompt": "An independent high-high pressure shutdown is specified. Which arrangement represents the complete functional path?",
      "choices": [
        "A normal production setpoint alone",
        "A safety PLC with no field inputs or outputs",
        "Pressure sensor, safety logic solver and feed-isolation final element",
        "Pressure display and a maintenance spreadsheet only"
      ],
      "correct": 2,
      "explanation": "The complete protective function needs detection, decision and physical action to reach the specified safe state."
    },
    {
      "id": "m13",
      "number": 13,
      "topic": "sis",
      "part": 1,
      "level": "Apply",
      "prompt": "A SIL 2 target SIF is proposed with a SIL 3-capable PLC and an unassessed valve assembly. Can the target be claimed as achieved?",
      "choices": [
        "No; assess the complete function, including the final element and lifecycle requirements",
        "Yes; the PLC capability automatically covers every connected device",
        "Yes; only the highest component rating matters",
        "Yes; valves never contribute dangerous failures"
      ],
      "correct": 0,
      "explanation": "A component capability does not establish the integrity of the full SIF. Sensors, actuation, architecture, diagnostics and lifecycle evidence also matter."
    },
    {
      "id": "m14",
      "number": 14,
      "topic": "sis",
      "part": 1,
      "level": "Apply",
      "prompt": "A 2oo3 pressure trip receives one high-pressure vote and two normal votes. Assuming no other trip conditions, is the voting threshold met?",
      "choices": [
        "No; all three votes are always required",
        "Yes; the number 3 means any one channel",
        "No; two of the three votes are required",
        "Yes; one vote always satisfies 2oo3"
      ],
      "correct": 2,
      "explanation": "2oo3 means two out of three channels must vote for the trip. Fault handling and degraded modes require the specified logic."
    },
    {
      "id": "m15",
      "number": 15,
      "topic": "sis",
      "part": 1,
      "level": "Apply",
      "prompt": "A valve passes an online partial-stroke test. Which statement is justified?",
      "choices": [
        "It eliminated all future proof-test requirements",
        "The test demonstrated the movement and failure modes covered by that procedure",
        "It established zero dangerous-failure probability",
        "It proved full shutoff tightness in every operating condition"
      ],
      "correct": 1,
      "explanation": "Partial stroke tests have limited coverage. Full travel, tight shutoff and end-to-end behavior may require separate tests."
    },
    {
      "id": "m16",
      "number": 16,
      "topic": "sis",
      "part": 1,
      "level": "Apply",
      "prompt": "A simplified 1oo1 subsystem has constant λDU = 2 × 10^-6/h and a 4,000-hour proof-test interval. Approximate PFDavg?",
      "choices": [
        "0.04",
        "0.004",
        "0.008",
        "0.0005"
      ],
      "correct": 1,
      "explanation": "Under the stated simplifying assumptions, PFDavg ≈ λDU T/2 = (2 × 10^-6 × 4,000)/2 = 0.004."
    },
    {
      "id": "m17",
      "number": 17,
      "topic": "sis",
      "part": 1,
      "level": "Apply",
      "prompt": "A proof test identifies a stuck shutdown valve. What is the correct operational response?",
      "choices": [
        "Leave the bypass in place permanently",
        "Call the test a pass because the PLC output changed",
        "Manage the impairment, repair the fault, retest as required and document restoration",
        "Erase the failure because the test found it"
      ],
      "correct": 2,
      "explanation": "The final element failed its action. Restore protection using the approved impairment, repair, test and reinstatement procedures."
    },
    {
      "id": "m18",
      "number": 18,
      "topic": "functional",
      "part": 1,
      "level": "Apply",
      "prompt": "A safety software change alters the trip delay. What should happen before release?",
      "choices": [
        "Replace only the label on the panel",
        "Review affected requirements and risk, control the change and verify/validate the affected function",
        "Treat the change as cosmetic because the same PLC is used",
        "Install it without recording the version"
      ],
      "correct": 1,
      "explanation": "Trip timing can affect hazard prevention. Controlled modification, traceability and appropriate verification/validation are necessary."
    },
    {
      "id": "m19",
      "number": 19,
      "topic": "sis",
      "part": 1,
      "level": "Apply",
      "prompt": "A proof test is complete, but an input bypass remains active. What must be done before claiming the SIF is available?",
      "choices": [
        "Remove the bypass under the controlled procedure and verify normal protection",
        "Disable the bypass indication instead",
        "Declare availability based solely on the signed test sheet",
        "Assume the next process demand will clear the bypass"
      ],
      "correct": 0,
      "explanation": "Successful testing does not restore a function that remains bypassed. Verify and record reinstatement."
    },
    {
      "id": "m20",
      "number": 20,
      "topic": "docs",
      "part": 1,
      "level": "Apply",
      "prompt": "The control narrative says close the inlet valve on high-high level, but the cause-and-effect matrix says open it. What should the team do?",
      "choices": [
        "Average the two actions",
        "Assume opposite actions are equivalent",
        "Resolve the inconsistency through engineering review before implementing or accepting the function",
        "Choose whichever document is easier to program"
      ],
      "correct": 2,
      "explanation": "Conflicting protective intent requires review and approved correction. Related documentation and implementation must agree."
    },
    {
      "id": "m21",
      "number": 21,
      "topic": "hazard",
      "part": 1,
      "level": "Apply",
      "prompt": "A flammable gas atmosphere is present continuously inside the assessed space. Which gas zone best describes this occurrence?",
      "choices": [
        "Zone 2",
        "Zone 22",
        "Zone 0",
        "Zone 20"
      ],
      "correct": 2,
      "explanation": "Gas Zone 0 covers continuous, frequent or long-duration explosive gas atmospheres. Dust uses a different number series."
    },
    {
      "id": "m22",
      "number": 22,
      "topic": "hazard",
      "part": 1,
      "level": "Apply",
      "prompt": "A dust cloud is unlikely in normal operation and lasts briefly if it occurs. Which zone applies to the assessed dust hazard?",
      "choices": [
        "Zone 22",
        "Zone 0",
        "Zone 2",
        "Zone 20"
      ],
      "correct": 0,
      "explanation": "Dust Zone 22 is the infrequent, short-duration category. Zone 2 is the corresponding gas/vapor series, not dust."
    },
    {
      "id": "m23",
      "number": 23,
      "topic": "hazard",
      "part": 1,
      "level": "Apply",
      "prompt": "Hydrogen is present in a classified area. A candidate device is approved only for gas group IIB. Which decision is appropriate?",
      "choices": [
        "Accept it because IIB is a dust group",
        "Accept it because every Ex marking covers every gas",
        "Do not assume suitability; verify equipment approval appropriate for IIC hydrogen service",
        "Ignore the gas group if the enclosure is metal"
      ],
      "correct": 2,
      "explanation": "Hydrogen is in IIC in the lecture. The gas group and all other certification conditions must suit the installation."
    },
    {
      "id": "m24",
      "number": 24,
      "topic": "hazard",
      "part": 1,
      "level": "Apply",
      "prompt": "A gas has autoignition temperature 120°C. Which listed rating satisfies the simple surface-temperature comparison?",
      "choices": [
        "T4: 135°C",
        "T2: 300°C",
        "T3: 200°C",
        "T5: 100°C"
      ],
      "correct": 3,
      "explanation": "T5 limits maximum surface temperature to 100°C, below 120°C. Other approval and operating conditions still apply."
    },
    {
      "id": "m25",
      "number": 25,
      "topic": "hazard",
      "part": 1,
      "level": "Apply",
      "prompt": "An installer proposes a 24 V device without an intrinsic-safety assessment because it is low voltage. What is correct?",
      "choices": [
        "Ignore cable parameters in intrinsic-safety design",
        "Treat a fuse alone as complete Ex i approval",
        "Accept every 24 V circuit as intrinsically safe",
        "Verify the complete certified circuit and associated apparatus; voltage alone is insufficient"
      ],
      "correct": 3,
      "explanation": "Intrinsic safety limits ignition-capable electrical/thermal energy under specified normal and fault conditions. The whole circuit matters."
    },
    {
      "id": "m26",
      "number": 26,
      "topic": "hazard",
      "part": 1,
      "level": "Apply",
      "prompt": "An Ex d enclosure needs a replacement cable gland. What should determine the replacement?",
      "choices": [
        "Color match alone",
        "Whether the gland can be forced into the hole",
        "The cheapest available unmarked fitting",
        "The enclosure certificate, cable construction and applicable protection/installation requirements"
      ],
      "correct": 3,
      "explanation": "Improper entries and glands can compromise the certified protection. Fit and required approval/conditions must be verified."
    },
    {
      "id": "m27",
      "number": 27,
      "topic": "install",
      "part": 1,
      "level": "Apply",
      "prompt": "A 0–80 kPa linear transmitter produces 16 mA. What value does the signal represent?",
      "choices": [
        "80 kPa",
        "60 kPa",
        "40 kPa",
        "16 kPa"
      ],
      "correct": 1,
      "explanation": "(16 − 4)/16 = 0.75 of span. 0.75 × 80 = 60 kPa."
    },
    {
      "id": "m28",
      "number": 28,
      "topic": "install",
      "part": 1,
      "level": "Apply",
      "prompt": "A 0–50 m³/h linear transmitter measures 30 m³/h. What output is expected?",
      "choices": [
        "12 mA",
        "16 mA",
        "9.6 mA",
        "13.6 mA"
      ],
      "correct": 3,
      "explanation": "I = 4 + 16 × (30/50) = 13.6 mA for the stated linear range."
    },
    {
      "id": "m29",
      "number": 29,
      "topic": "install",
      "part": 1,
      "level": "Apply",
      "prompt": "An analog cable must cross a power route. Which arrangement best follows the lecture guidance?",
      "choices": [
        "Remove the signal shield to avoid coupling",
        "Use the required separation and cross near 90° where a crossing is necessary",
        "Remove protective earth to reduce noise",
        "Run both cables parallel in contact to reduce route length"
      ],
      "correct": 1,
      "explanation": "Appropriate separation and near-right-angle crossings reduce electromagnetic coupling. Other cable and installation rules still apply."
    },
    {
      "id": "m30",
      "number": 30,
      "topic": "install",
      "part": 1,
      "level": "Apply",
      "prompt": "All instruments power up, but no loop checks or interlock tests have been performed. What is the correct handover decision?",
      "choices": [
        "Complete required tests and integrated commissioning before operational acceptance",
        "Accept the plant because power-up proves every function",
        "Sign test records based on expected behavior",
        "Treat neat wiring as proof of correct control action"
      ],
      "correct": 0,
      "explanation": "Inspection and power-up do not establish integrated performance. Test signals, modes, alarms, interlocks and required documentation."
    },
    {
      "id": "m31",
      "number": 31,
      "topic": "asme",
      "part": 2,
      "level": "Remember",
      "prompt": "Which B31 code addresses liquid transportation pipelines?",
      "choices": [
        "B31.8",
        "B31.4",
        "B31.3",
        "B31.1"
      ],
      "correct": 1,
      "explanation": "B31.4 addresses liquid transportation pipelines; B31.8 addresses gas transmission/distribution."
    },
    {
      "id": "m32",
      "number": 32,
      "topic": "asme",
      "part": 2,
      "level": "Remember",
      "prompt": "What does MTR stand for in material control?",
      "choices": [
        "Material Test Report",
        "Mechanical Timing Record",
        "Motor Trip Relay",
        "Maximum Temperature Ratio"
      ],
      "correct": 0,
      "explanation": "Material Test Reports support verification of material properties/specification and traceability."
    },
    {
      "id": "m33",
      "number": 33,
      "topic": "iso",
      "part": 2,
      "level": "Remember",
      "prompt": "Which ISO management standard focuses on occupational health and safety?",
      "choices": [
        "ISO 45001",
        "ISO 14001",
        "ISO 9001",
        "ISO/IEC 27001"
      ],
      "correct": 0,
      "explanation": "ISO 45001 concerns occupational health/safety; 9001 quality, 14001 environment and 27001 information security."
    },
    {
      "id": "m34",
      "number": 34,
      "topic": "isa",
      "part": 2,
      "level": "Remember",
      "prompt": "What does the first letter L normally identify in LT-305?",
      "choices": [
        "Low alarm only",
        "Level",
        "Logic solver",
        "Local panel in every tag"
      ],
      "correct": 1,
      "explanation": "The first letter identifies the measured/initiating variable: L means level. A following L can be a low modifier."
    },
    {
      "id": "m35",
      "number": 35,
      "topic": "isa",
      "part": 2,
      "level": "Remember",
      "prompt": "What does a following R indicate in an instrument function such as TR?",
      "choices": [
        "Reset in every ISA tag",
        "Radiation as the first variable in every position",
        "Record",
        "Ratio in every position"
      ],
      "correct": 2,
      "explanation": "TR is a temperature recorder in the common lecture convention. Position determines meaning."
    },
    {
      "id": "m36",
      "number": 36,
      "topic": "docs",
      "part": 2,
      "level": "Remember",
      "prompt": "Which document lists cable identifiers, source, destination, type and core count?",
      "choices": [
        "Instrument data sheet only",
        "Control narrative",
        "Pressure test certificate",
        "Cable schedule"
      ],
      "correct": 3,
      "explanation": "The cable schedule organizes individual cable routing/selection information."
    },
    {
      "id": "m37",
      "number": 37,
      "topic": "docs",
      "part": 2,
      "level": "Remember",
      "prompt": "Which document primarily shows overall major equipment and process streams?",
      "choices": [
        "Welder qualification record",
        "Terminal-block diagram",
        "Process Flow Diagram",
        "Individual loop diagram"
      ],
      "correct": 2,
      "explanation": "A PFD shows the overall process. A P&ID adds detailed piping, instrumentation and control relationships."
    },
    {
      "id": "m38",
      "number": 38,
      "topic": "functional",
      "part": 2,
      "level": "Remember",
      "prompt": "What does E/E/PE stand for?",
      "choices": [
        "Electrical, Electronic, Programmable Electronic",
        "Emergency, Evacuation, Plant Exit",
        "Equipment, Examination, Pipe Erection",
        "Energy, Efficiency, Process Engineering"
      ],
      "correct": 0,
      "explanation": "IEC 61508 concerns electrical, electronic and programmable electronic safety-related systems."
    },
    {
      "id": "m39",
      "number": 39,
      "topic": "functional",
      "part": 2,
      "level": "Remember",
      "prompt": "Which IEC 61508 part specifically addresses safety-related software requirements?",
      "choices": [
        "Part 3",
        "Part 2",
        "ISO Clause 7.5",
        "ASME Section IX"
      ],
      "correct": 0,
      "explanation": "IEC 61508-3 addresses software; IEC 61508-2 addresses hardware/system realization requirements in the lecture."
    },
    {
      "id": "m40",
      "number": 40,
      "topic": "functional",
      "part": 2,
      "level": "Remember",
      "prompt": "What does ALARP stand for?",
      "choices": [
        "As Little As Regulations Permit",
        "Always Leave A Risk Present",
        "As Low As Reasonably Practicable",
        "All Layers Automatically Remove Probability"
      ],
      "correct": 2,
      "explanation": "ALARP is a risk-reduction decision principle, not a claim that risk is zero or that cost alone excuses protection."
    },
    {
      "id": "m41",
      "number": 41,
      "topic": "functional",
      "part": 2,
      "level": "Remember",
      "prompt": "What does HFT stand for?",
      "choices": [
        "Hazard-Free Technology",
        "Hardware Fault Tolerance",
        "High Frequency Transmission",
        "Hardware Function Timing"
      ],
      "correct": 1,
      "explanation": "HFT concerns the capability to tolerate relevant hardware faults without losing the safety function."
    },
    {
      "id": "m42",
      "number": 42,
      "topic": "sis",
      "part": 2,
      "level": "Remember",
      "prompt": "Which item is normally a final element in a shutdown function?",
      "choices": [
        "Safety Requirements Specification document",
        "Process variable label",
        "Risk graph worksheet",
        "Emergency shutdown valve and actuation assembly"
      ],
      "correct": 3,
      "explanation": "The final element carries out the physical protective action. Its accessories and utilities can affect performance."
    },
    {
      "id": "m43",
      "number": 43,
      "topic": "sis",
      "part": 2,
      "level": "Remember",
      "prompt": "What does BPCS stand for?",
      "choices": [
        "Basic Process Control System",
        "Binary Programmable Cable Shield",
        "Bypass Protection Confirmation Sheet",
        "Boiler Pressure Certification Standard"
      ],
      "correct": 0,
      "explanation": "The BPCS performs routine process regulation; the SIS provides the required protective functions."
    },
    {
      "id": "m44",
      "number": 44,
      "topic": "sis",
      "part": 2,
      "level": "Remember",
      "prompt": "Which term names the specific protective function implemented within an SIS?",
      "choices": [
        "SIF",
        "PFD",
        "SIL",
        "MTR"
      ],
      "correct": 0,
      "explanation": "SIF means Safety Instrumented Function. SIL is the required integrity level, not the function itself."
    },
    {
      "id": "m45",
      "number": 45,
      "topic": "functional",
      "part": 2,
      "level": "Remember",
      "prompt": "Which metric is dimensionless?",
      "choices": [
        "PFDavg",
        "Initiating-event frequency per year",
        "PFH in failures per hour",
        "Dangerous failure rate per hour"
      ],
      "correct": 0,
      "explanation": "PFDavg is an average probability of failure on demand. Rates and frequencies have time-based units."
    },
    {
      "id": "m46",
      "number": 46,
      "topic": "hazard",
      "part": 2,
      "level": "Remember",
      "prompt": "In NEC terminology, which class addresses flammable gases and vapors?",
      "choices": [
        "Class II",
        "Temperature Class T6",
        "Class III",
        "Class I"
      ],
      "correct": 3,
      "explanation": "Class I identifies gas/vapor hazards. Class II concerns dust; Class III ignitable fibers/flyings."
    },
    {
      "id": "m47",
      "number": 47,
      "topic": "hazard",
      "part": 2,
      "level": "Remember",
      "prompt": "Which corrected IEC dust group addresses nonconductive combustible dust?",
      "choices": [
        "IIIC",
        "IIB",
        "IIIB",
        "IIA"
      ],
      "correct": 2,
      "explanation": "IIIB is nonconductive dust. IIIA is combustible flyings and IIIC conductive dust."
    },
    {
      "id": "m48",
      "number": 48,
      "topic": "hazard",
      "part": 2,
      "level": "Remember",
      "prompt": "What maximum surface temperature corresponds to T6?",
      "choices": [
        "100°C",
        "135°C",
        "450°C",
        "85°C"
      ],
      "correct": 3,
      "explanation": "T6 is the coolest limit in the T1–T6 gas temperature-class table: 85°C."
    },
    {
      "id": "m49",
      "number": 49,
      "topic": "install",
      "part": 2,
      "level": "Remember",
      "prompt": "What does LSZH describe in cable materials?",
      "choices": [
        "Line Shield Zone Hazard",
        "Liquid-Sealed Zinc Housing",
        "Low Smoke Zero Halogen",
        "Low Signal Zero Harmonics"
      ],
      "correct": 2,
      "explanation": "LSZH describes low-smoke, zero-halogen materials, relevant to specified cable fire/emission requirements."
    },
    {
      "id": "m50",
      "number": 50,
      "topic": "install",
      "part": 2,
      "level": "Remember",
      "prompt": "What does PE denote in the installation material?",
      "choices": [
        "Protective earth",
        "Pressure examination",
        "Programmable efficiency",
        "Process estimate"
      ],
      "correct": 0,
      "explanation": "Protective earth supports electrical safety. It must not be disconnected as a noise-removal shortcut."
    },
    {
      "id": "m51",
      "number": 51,
      "topic": "asme",
      "part": 3,
      "level": "Apply",
      "prompt": "A steam-generation piping system requires selection from the listed B31 codes. Which is the primary power-piping reference?",
      "choices": [
        "ISO 45001",
        "B31.4",
        "B31.1",
        "B31.8"
      ],
      "correct": 2,
      "explanation": "B31.1 is the power-piping code. Confirm actual boundaries and applicable jurisdiction before selection."
    },
    {
      "id": "m52",
      "number": 52,
      "topic": "asme",
      "part": 3,
      "level": "Apply",
      "prompt": "A process line operates safely, but the proposed design omits an anticipated pressure surge. What is the correct response?",
      "choices": [
        "Accept the omission if the paint is intact",
        "Evaluate the surge in the applicable design-pressure/load assessment",
        "Use a tag number instead of a pressure calculation",
        "Ignore it because only average pressure matters"
      ],
      "correct": 1,
      "explanation": "The design must consider applicable severe operating conditions and relevant dynamic effects, not just normal averages."
    },
    {
      "id": "m53",
      "number": 53,
      "topic": "asme",
      "part": 3,
      "level": "Apply",
      "prompt": "Pressure-design inputs are P = 1 MPa, D = 100 mm, S = 100 MPa, E = 1 and Y = 0.4. Using the lecture formula, what is t?",
      "choices": [
        "Approximately 0.498 mm",
        "Approximately 1.004 mm",
        "Approximately 50 mm",
        "Approximately 4.98 mm"
      ],
      "correct": 0,
      "explanation": "t = PD/[2(SE + PY)] = 100/[2(100 + 0.4)] = 0.498 mm, before allowances and other design checks."
    },
    {
      "id": "m54",
      "number": 54,
      "topic": "asme",
      "part": 3,
      "level": "Apply",
      "prompt": "Pressure thickness is 3 mm and corrosion allowance is 2 mm. Negative mill tolerance is 12.5%. Minimum nominal thickness from these factors?",
      "choices": [
        "Approximately 5.714 mm",
        "Approximately 4.375 mm",
        "5 mm",
        "Approximately 3.429 mm"
      ],
      "correct": 0,
      "explanation": "Nominal minimum = (3 + 2)/0.875 = 5.714 mm, before other allowances and checks."
    },
    {
      "id": "m55",
      "number": 55,
      "topic": "asme",
      "part": 3,
      "level": "Apply",
      "prompt": "A material is proposed at a higher metal temperature than originally specified. What should be rechecked in the wall-thickness calculation?",
      "choices": [
        "Only the instrument-loop number",
        "The applicable allowable stress and other temperature-dependent factors",
        "Only the shipping weight",
        "Only the pipe color"
      ],
      "correct": 1,
      "explanation": "Allowable stress depends on temperature and material. Higher temperature can increase required thickness; assess all applicable factors."
    },
    {
      "id": "m56",
      "number": 56,
      "topic": "asme",
      "part": 3,
      "level": "Apply",
      "prompt": "An unlisted material has no permitted qualification evidence. What is appropriate?",
      "choices": [
        "Accept it because it is expensive",
        "Assume it has the same allowable stress as any steel",
        "Use a larger label to compensate",
        "Require the code-permitted material evaluation before acceptance"
      ],
      "correct": 3,
      "explanation": "Unlisted material is not automatically prohibited or accepted. Its permitted use requires appropriate evaluation and evidence."
    },
    {
      "id": "m57",
      "number": 57,
      "topic": "asme",
      "part": 3,
      "level": "Apply",
      "prompt": "A welder has qualifications, but the proposed welding procedure lacks supporting qualification. What follows?",
      "choices": [
        "Accept any procedure used by that welder",
        "Review and establish the required procedure qualification; personnel qualification alone is insufficient",
        "Treat personnel and procedure qualification as interchangeable",
        "Skip the WPS if an inspector is present"
      ],
      "correct": 1,
      "explanation": "WPS, PQR and welder qualification have distinct roles. One does not automatically substitute for the others."
    },
    {
      "id": "m58",
      "number": 58,
      "topic": "asme",
      "part": 3,
      "level": "Apply",
      "prompt": "A joint requires PWHT under the applicable rules. The contractor proposes to omit it to shorten the schedule. What should happen?",
      "choices": [
        "Let the schedule determine metallurgical acceptance",
        "Follow the applicable PWHT requirement or an explicitly permitted engineered alternative",
        "Omit it because a visual inspection passed",
        "Replace it with a new revision number alone"
      ],
      "correct": 1,
      "explanation": "Required heat treatment addresses material/stress conditions. A visual examination does not replace it."
    },
    {
      "id": "m59",
      "number": 59,
      "topic": "asme",
      "part": 3,
      "level": "Apply",
      "prompt": "An owner wants to confirm that examination records and welding certifications satisfy the construction requirements. Which activity is this?",
      "choices": [
        "Only purchasing a new valve",
        "Only drawing a cable route",
        "Only measuring process flow",
        "Inspection of compliance and records"
      ],
      "correct": 3,
      "explanation": "The inspector verifies compliance and supporting evidence; examiners conduct/evaluate specified examinations."
    },
    {
      "id": "m60",
      "number": 60,
      "topic": "asme",
      "part": 3,
      "level": "Apply",
      "prompt": "A 4 MPa design line is proposed for a pneumatic test. What lecture multiplier gives an initial study value before required adjustments and limits?",
      "choices": [
        "1.1 × 4 = 4.4 MPa",
        "1.5 × 4 = 6 MPa automatically",
        "4 × 4 = 16 MPa",
        "0.1 × 4 = 0.4 MPa"
      ],
      "correct": 0,
      "explanation": "The lecture uses 1.1P for pneumatic testing; actual test pressure and safety procedure require applicable code checks."
    },
    {
      "id": "m61",
      "number": 61,
      "topic": "asme",
      "part": 3,
      "level": "Apply",
      "prompt": "A trapped liquid section can overpressure as it warms. Which protection addresses that scenario?",
      "choices": [
        "A new instrument tag with no hardware change",
        "A cable shield disconnected at both ends",
        "A larger display font",
        "An appropriately selected thermal relief arrangement"
      ],
      "correct": 3,
      "explanation": "Thermal expansion of trapped liquid can generate damaging pressure. Evaluate the appropriate relief design for that scenario."
    },
    {
      "id": "m62",
      "number": 62,
      "topic": "asme",
      "part": 3,
      "level": "Apply",
      "prompt": "A process pipe has measurable in-service corrosion. Which listed assessment addresses continued suitability of damaged equipment?",
      "choices": [
        "Only an ISA tag-decoding exercise",
        "Only the original paint specification",
        "Only a supplier attendance list",
        "Fitness-for-service assessment using the applicable guidance"
      ],
      "correct": 3,
      "explanation": "Fitness-for-service evaluates whether damaged equipment remains suitable. Inspection, remaining thickness, loading and service conditions matter."
    },
    {
      "id": "m63",
      "number": 63,
      "topic": "iso",
      "part": 3,
      "level": "Apply",
      "prompt": "A manager defines accuracy targets, resources and a calibration schedule. Which PDCA phase is being emphasized?",
      "choices": [
        "Do",
        "Act",
        "Plan",
        "Check"
      ],
      "correct": 2,
      "explanation": "Plan establishes objectives and processes/resources needed to meet requirements. Execution, evaluation and improvement follow."
    },
    {
      "id": "m64",
      "number": 64,
      "topic": "iso",
      "part": 3,
      "level": "Apply",
      "prompt": "Technicians perform the approved calibration procedure. Which PDCA phase is most directly represented?",
      "choices": [
        "Plan",
        "Check only",
        "Act only",
        "Do"
      ],
      "correct": 3,
      "explanation": "Do is implementation of the planned process. Reviewing its outcomes is Check."
    },
    {
      "id": "m65",
      "number": 65,
      "topic": "iso",
      "part": 3,
      "level": "Apply",
      "prompt": "An engineer compares calibration failure rates with the quality target. Which PDCA phase is most directly represented?",
      "choices": [
        "Do only",
        "Check",
        "Procurement outside PDCA",
        "Plan only"
      ],
      "correct": 1,
      "explanation": "Check evaluates performance against the defined requirements and objectives."
    },
    {
      "id": "m66",
      "number": 66,
      "topic": "iso",
      "part": 3,
      "level": "Apply",
      "prompt": "A recurring wiring error leads to an improved installation procedure, training and later effectiveness review. What is being demonstrated?",
      "choices": [
        "An automatic exemption from future QC",
        "Abandonment of quality planning",
        "Corrective action and continual improvement",
        "A correction with no cause analysis"
      ],
      "correct": 2,
      "explanation": "Removing causes and checking effectiveness go beyond fixing a single instance and support continual improvement."
    },
    {
      "id": "m67",
      "number": 67,
      "topic": "iso",
      "part": 3,
      "level": "Apply",
      "prompt": "A team audits a supplier before awarding an instrumentation order. Which classification best fits?",
      "choices": [
        "Quality assurance focused on process confidence",
        "Only final-product quality control",
        "A pressure proof test",
        "A hazardous-area zoning method"
      ],
      "correct": 0,
      "explanation": "Supplier audits are QA activities. Inspecting individual delivered devices is QC."
    },
    {
      "id": "m68",
      "number": 68,
      "topic": "iso",
      "part": 3,
      "level": "Apply",
      "prompt": "A delivered pressure transmitter is tested against its specified accuracy limits. Which classification best fits?",
      "choices": [
        "Only relationship management",
        "Quality control of the output",
        "Only management leadership",
        "Only an environmental assessment"
      ],
      "correct": 1,
      "explanation": "Testing a specific delivered item for conformity is QC, even though QA processes support the testing."
    },
    {
      "id": "m69",
      "number": 69,
      "topic": "iso",
      "part": 3,
      "level": "Apply",
      "prompt": "A known supply delay threatens commissioning. Which action best applies risk-based thinking?",
      "choices": [
        "Hide the delay in the audit log",
        "Wait until the deadline is missed before identifying the issue",
        "Assess the risk early and plan mitigation and contingencies",
        "Eliminate traceability requirements to save time"
      ],
      "correct": 2,
      "explanation": "Risk-based thinking addresses threats and opportunities before they prevent intended results. Actions should be appropriate and documented."
    },
    {
      "id": "m70",
      "number": 70,
      "topic": "iso",
      "part": 3,
      "level": "Apply",
      "prompt": "An audit reveals outdated drawings in field folders. Which corrective approach is best?",
      "choices": [
        "Fix distribution/access control and verify users receive current approved revisions",
        "Tell workers to guess which revision is newest",
        "Change the title without reviewing its content",
        "Delete all controlled master documents"
      ],
      "correct": 0,
      "explanation": "Document control must prevent unintended obsolete-document use while preserving appropriate revision history and traceability."
    },
    {
      "id": "m71",
      "number": 71,
      "topic": "isa",
      "part": 3,
      "level": "Apply",
      "prompt": "A drawing shows PT-112 and PIC-112. Which valve tag is consistent with the lecture’s pressure-loop convention?",
      "choices": [
        "TV-112",
        "LV-112",
        "FV-999",
        "PV-112"
      ],
      "correct": 3,
      "explanation": "The loop variable is pressure and the loop number is 112. The final control valve uses that variable/loop convention."
    },
    {
      "id": "m72",
      "number": 72,
      "topic": "isa",
      "part": 3,
      "level": "Apply",
      "prompt": "The same letter I appears first in an instrument tag and later as a functional letter in another. What is the correct interpretation?",
      "choices": [
        "I always indicates an intrinsically safe circuit",
        "I always means the instrument is indoors",
        "I always means an interlock regardless of position",
        "First I can mean electrical current; following I means indication"
      ],
      "correct": 3,
      "explanation": "ISA letter meaning depends on position. Do not infer safety certification or mounting from a letter without its proper context."
    },
    {
      "id": "m73",
      "number": 73,
      "topic": "isa",
      "part": 3,
      "level": "Apply",
      "prompt": "An operator sees LSHH-401. What should the tag be read as?",
      "choices": [
        "Low-speed heating controller, loop 401",
        "A transmitter that must output 401 mA",
        "Level sensor heat-humidity, loop 401",
        "Level switch high-high, loop 401"
      ],
      "correct": 3,
      "explanation": "L identifies level, S switch and HH high-high. The number identifies the loop under the project convention."
    },
    {
      "id": "m74",
      "number": 74,
      "topic": "isa",
      "part": 3,
      "level": "Apply",
      "prompt": "An instrument bubble has no location line in the lecture’s chart. Which interpretation is appropriate?",
      "choices": [
        "Normally field mounted and accessible at the field location",
        "Guaranteed SIL 4 certification",
        "Guaranteed primary-panel mounting",
        "Always behind the main panel"
      ],
      "correct": 0,
      "explanation": "The supplied convention uses no horizontal line for field location. Confirm the drawing legend and edition."
    },
    {
      "id": "m75",
      "number": 75,
      "topic": "isa",
      "part": 3,
      "level": "Apply",
      "prompt": "A circle has a dashed horizontal location line in the supplied chart. What does it normally communicate?",
      "choices": [
        "A function behind the main panel, normally not operator accessible",
        "An unconditionally invalid symbol",
        "A failed instrument battery",
        "A broken pressure pipe"
      ],
      "correct": 0,
      "explanation": "The location/accessibility chart uses a dashed horizontal line for a normally inaccessible main-panel/cabinet function."
    },
    {
      "id": "m76",
      "number": 76,
      "topic": "isa",
      "part": 3,
      "level": "Apply",
      "prompt": "A fuel valve must stop flow on loss of the specified actuator utility. Which failure action fits that defined safe state?",
      "choices": [
        "Fail open",
        "Fail closed",
        "Always drift open after a delay",
        "Fail indeterminate"
      ],
      "correct": 1,
      "explanation": "Fail-closed matches the stated isolation requirement. Verify actuator/accessories and the specific failure condition."
    },
    {
      "id": "m77",
      "number": 77,
      "topic": "isa",
      "part": 3,
      "level": "Apply",
      "prompt": "A valve is labeled FL/DO. Which behavior must be considered after the specified loss of power or air?",
      "choices": [
        "It always reaches exactly 50% travel",
        "It initially holds its last position and can later drift open",
        "It is a certified pressure relief valve",
        "It immediately and permanently locks closed"
      ],
      "correct": 1,
      "explanation": "FL/DO describes initial fail-last behavior followed by possible drift open. The eventual state matters in hazard analysis."
    },
    {
      "id": "m78",
      "number": 78,
      "topic": "isa",
      "part": 3,
      "level": "Apply",
      "prompt": "In the reactor example, a 4–20 mA controller output is converted to a 3–15 psi actuator signal. What function is represented?",
      "choices": [
        "Direct proof of complete-loop SIL 3",
        "Conversion of process steam into cooling water",
        "Conversion of pressure piping into a data bus",
        "Electrical-to-pneumatic signal conversion"
      ],
      "correct": 3,
      "explanation": "The converter interfaces an electrical command with pneumatic valve actuation. It is distinct from process-fluid piping."
    },
    {
      "id": "m79",
      "number": 79,
      "topic": "isa",
      "part": 3,
      "level": "Apply",
      "prompt": "A downstream chlorine analyzer detects residual below its setpoint in the supplied dosing example. What is the intended normal control response, within specified constraints?",
      "choices": [
        "Shut every unrelated cooling valve",
        "Always reduce dosing further",
        "Increase chlorine dosing toward the target",
        "Assume an analyzer cannot be part of feedback control"
      ],
      "correct": 2,
      "explanation": "The analytical measurement feeds a controller that adjusts chlorine dosing. Check the actual narrative and constraints for implementation."
    },
    {
      "id": "m80",
      "number": 80,
      "topic": "isa",
      "part": 3,
      "level": "Apply",
      "prompt": "A P&ID includes a dashed electrical signal between a transmitter and controller. What does that connection primarily represent?",
      "choices": [
        "Main flow of process fluid",
        "The exact physical routing dimension",
        "Transmission of measurement/control information",
        "A weld requiring PWHT"
      ],
      "correct": 2,
      "explanation": "Signal links describe information/control paths. A P&ID is a functional schematic rather than a precise routing/layout drawing."
    },
    {
      "id": "m81",
      "number": 81,
      "topic": "hazard",
      "part": 4,
      "level": "Understand",
      "prompt": "Why is a Zone 2 location still subject to hazardous-area equipment selection?",
      "choices": [
        "Zone 2 is an unclassified office by definition",
        "Zone 2 guarantees no flammable material exists",
        "Only locations with continuous explosions are hazardous",
        "An explosive atmosphere can still arise under the specified abnormal conditions"
      ],
      "correct": 3,
      "explanation": "Infrequent, short-duration occurrence does not mean no hazard. Equipment must still meet the applicable area requirements."
    },
    {
      "id": "m82",
      "number": 82,
      "topic": "hazard",
      "part": 4,
      "level": "Understand",
      "prompt": "Why should gas Zones 0/1/2 and dust Zones 20/21/22 not be mixed?",
      "choices": [
        "They describe different hazardous-atmosphere types using separate zone series",
        "Gas zones identify cable conductor size",
        "Dust can never cause an explosion",
        "The numbers are interchangeable spelling choices"
      ],
      "correct": 0,
      "explanation": "Correct classification depends on atmosphere type as well as occurrence likelihood/duration. The lecture’s early dust-zone table is mislabeled."
    },
    {
      "id": "m83",
      "number": 83,
      "topic": "hazard",
      "part": 4,
      "level": "Understand",
      "prompt": "How do Ex i and Ex d differ in basic principle?",
      "choices": [
        "Ex i limits ignition-capable energy; Ex d contains an internal explosion and prevents flame transmission",
        "Both rely only on a high IP number",
        "Ex i contains unrestricted internal explosions; Ex d eliminates every electrical energy source",
        "Both make the gas group irrelevant"
      ],
      "correct": 0,
      "explanation": "Intrinsic safety limits energy; flameproof protection controls an internal explosion through a certified enclosure/flamepath design."
    },
    {
      "id": "m84",
      "number": 84,
      "topic": "hazard",
      "part": 4,
      "level": "Understand",
      "prompt": "Why is T6 cooler than T4 despite having a larger class number?",
      "choices": [
        "The number is the minimum ambient temperature",
        "T6 is hotter because six is larger than four",
        "The class number is a label; its permitted maximum surface temperature is lower",
        "The rating is the number of heating elements"
      ],
      "correct": 2,
      "explanation": "T4 is 135°C maximum and T6 is 85°C maximum in the gas T-class table. These are class limits, not arithmetic temperature values."
    },
    {
      "id": "m85",
      "number": 85,
      "topic": "hazard",
      "part": 4,
      "level": "Understand",
      "prompt": "Why can combustible dust deposits matter even without a continuous airborne cloud?",
      "choices": [
        "Deposits automatically change every area to gas Zone 0",
        "Deposits can insulate hot surfaces and may later become airborne",
        "Dust deposits are always inert after settling",
        "Deposits remove the need for temperature assessment"
      ],
      "correct": 1,
      "explanation": "Dust layers and clouds create distinct considerations. Surface heating, accumulation and possible dispersal all require assessment."
    },
    {
      "id": "m86",
      "number": 86,
      "topic": "hazard",
      "part": 4,
      "level": "Understand",
      "prompt": "Why does an IP rating alone not establish hazardous-area suitability?",
      "choices": [
        "A numeric enclosure rating eliminates certification conditions",
        "Any watertight enclosure is automatically flameproof",
        "Ingress protection and explosion protection address different requirements",
        "IP always means intrinsic protection with universal gas approval"
      ],
      "correct": 2,
      "explanation": "Ingress resistance does not by itself prove prevention or containment of ignition for the specified gas/dust atmosphere."
    },
    {
      "id": "m87",
      "number": 87,
      "topic": "install",
      "part": 4,
      "level": "Understand",
      "prompt": "What is the primary difference between cable armor and shielding?",
      "choices": [
        "Armor alone proves a circuit intrinsically safe",
        "Shielding is a substitute for all conductor insulation",
        "Armor primarily resists mechanical damage; shielding primarily manages electromagnetic interference",
        "They are always the same layer with identical performance"
      ],
      "correct": 2,
      "explanation": "Different cable layers have different primary functions. Verify mechanical, EMC, electrical and hazardous-area requirements separately."
    },
    {
      "id": "m88",
      "number": 88,
      "topic": "install",
      "part": 4,
      "level": "Understand",
      "prompt": "Why is protective earth not an acceptable conductor to remove when diagnosing signal noise?",
      "choices": [
        "It is only a spare communication wire",
        "It carries no safety function if a signal is 4–20 mA",
        "It performs an electrical-safety function that must remain effective",
        "Its removal automatically increases measurement accuracy safely"
      ],
      "correct": 2,
      "explanation": "Resolve ground-loop and EMC issues through the designed signal/reference system without defeating protective bonding."
    },
    {
      "id": "m89",
      "number": 89,
      "topic": "install",
      "part": 4,
      "level": "Understand",
      "prompt": "Why is a single-point shield connection common for many low-frequency analog loops but not universal?",
      "choices": [
        "Shield connections have no effect on interference",
        "A shield can never be connected at a panel",
        "Every network uses identical grounding requirements",
        "Ground-loop and high-frequency EMC requirements differ between systems"
      ],
      "correct": 3,
      "explanation": "One-end grounding can reduce low-frequency loop currents. Some network/high-frequency designs need different terminations; follow the actual design."
    },
    {
      "id": "m90",
      "number": 90,
      "topic": "install",
      "part": 4,
      "level": "Understand",
      "prompt": "How does commissioning differ from a visual installation inspection?",
      "choices": [
        "Commissioning eliminates every need for calibration",
        "Commissioning demonstrates integrated operational behavior; inspection checks installation conformity",
        "Inspection automatically proves all control sequences",
        "Both are only checks of paint finish"
      ],
      "correct": 1,
      "explanation": "Correct construction and correct integrated operation are separate questions. Testing and commissioning provide additional evidence."
    },
    {
      "id": "m91",
      "number": 91,
      "topic": "install",
      "part": 4,
      "level": "Understand",
      "prompt": "Why can a correctly calibrated transmitter still produce an incorrect DCS display?",
      "choices": [
        "A correct local reading proves every signal terminal",
        "DCS displays cannot be configured",
        "Wiring, channel assignment or scaling elsewhere in the installed loop can be wrong",
        "Calibration guarantees every connected software setting"
      ],
      "correct": 2,
      "explanation": "The complete installed path and control-system configuration must be verified, not only the isolated sensor."
    },
    {
      "id": "m92",
      "number": 92,
      "topic": "docs",
      "part": 4,
      "level": "Understand",
      "prompt": "Why should an instrument keep the same identification across the index, P&ID and loop diagram?",
      "choices": [
        "Different tags always make maintenance safer",
        "Only the drawing title matters",
        "Consistent identity supports traceability and prevents installation/troubleshooting errors",
        "Matching tags remove the need for technical specifications"
      ],
      "correct": 2,
      "explanation": "Cross-document consistency connects the physical device, specification, control role and wiring information."
    },
    {
      "id": "m93",
      "number": 93,
      "topic": "functional",
      "part": 4,
      "level": "Understand",
      "prompt": "Why does redundancy not automatically remove systematic failure risk?",
      "choices": [
        "Systematic errors occur only in cable insulation",
        "Redundant channels may share the same specification, software or design error",
        "Two channels cannot have common causes",
        "Any voting scheme guarantees zero risk"
      ],
      "correct": 1,
      "explanation": "A common systematic cause can affect multiple channels. Disciplined lifecycle work and independence/diversity considerations remain important."
    },
    {
      "id": "m94",
      "number": 94,
      "topic": "functional",
      "part": 4,
      "level": "Understand",
      "prompt": "Why is a risk graph not a universal SIL answer based on consequence alone?",
      "choices": [
        "Its calibrated decision path also considers exposure, avoidance and occurrence assumptions",
        "Its output depends only on the color of the diagram",
        "Consequence is never relevant",
        "Every hazard in every plant requires the same SIL"
      ],
      "correct": 0,
      "explanation": "Risk graphs combine several parameters and depend on calibration. A single parameter does not establish a universal SIL."
    },
    {
      "id": "m95",
      "number": 95,
      "topic": "sis",
      "part": 4,
      "level": "Understand",
      "prompt": "Why must proof-test interval and coverage be included in SIL verification?",
      "choices": [
        "Proof-test coverage is automatically 100% for every procedure",
        "They influence how long dangerous hidden faults can persist and which faults are revealed",
        "Testing intervals are always identical for all devices",
        "They are unrelated to failure probability"
      ],
      "correct": 1,
      "explanation": "The integrity calculation must match the actual maintenance/test strategy and coverage, including undetected failures."
    },
    {
      "id": "m96",
      "number": 96,
      "topic": "sis",
      "part": 4,
      "level": "Understand",
      "prompt": "How does SIS purpose differ from BPCS purpose?",
      "choices": [
        "The SIS performs required protection; the BPCS performs routine process regulation",
        "The SIS only optimizes production cost",
        "Both names guarantee identical independence and integrity",
        "The BPCS is always a complete independent safety layer for every scenario"
      ],
      "correct": 0,
      "explanation": "The systems have different roles. Required independence and failure interactions must be assessed for credited protection."
    },
    {
      "id": "m97",
      "number": 97,
      "topic": "functional",
      "part": 4,
      "level": "Understand",
      "prompt": "Why is verification different from validation?",
      "choices": [
        "Verification is only painting the cabinet; validation is only printing a certificate",
        "Verification checks outputs against requirements; validation confirms the integrated function fulfills its intended safety requirements",
        "Validation is unnecessary if a device has a serial number",
        "They both mean selecting the cheapest available component"
      ],
      "correct": 1,
      "explanation": "Verification is applied across lifecycle phases; validation demonstrates that the implemented function meets the specified intended use and safety requirements."
    }
  ]
};
