# ICE 409 — Complete Exam Reviewer
## Codes, Standards and Professional Ethics | Topics 8–12.1

Based on all eight uploaded PDFs and your professor's photographed pointers. Organized for REMEMBERING (facts), UNDERSTANDING (explain and compare), and APPLYING (choose and justify an action). Repeated material is consolidated; additional content from each version is retained. Examples and worked calculations labeled as practice are added study aids, not quotations or predicted examination questions.

## 1. Your professor's examination pointers

| Content group | Remembering / knowledge | Understanding / comprehension | Applying / application |
| --- | --- | --- | --- |
| A: ASME standards and process piping; ISO standards and quality management; instrument identification and ISA 5.1 symbology | Part II, 31–35 | No separate range shown | Part III, 51–81 as handwritten |
| B: Process control and instrumentation documentation; IEC 61508 functional safety; IEC 61511 safety instrumented systems | Part II, 36–45 | Part IV, 92–97 | Part I, 1–20 |
| C: Hazardous-area classification and protection; electrical and instrumentation installation | Part II, 46–50 | Part IV, 81–91 | Part I, 21–30 |

The photograph appears to place question 81 in two ranges. Treat that boundary as uncertain; the topic grouping is clear. The practice questions below are independently numbered and are not a reconstruction of the actual exam.

How to study: first recall definitions and tables without looking; next explain why each distinction matters; finally solve the scenarios and justify the answer using the relevant standard, document, or safety principle.

## 2. Source map and corrections to notice

| Uploaded source | Pages | Coverage used here |
| --- | --- | --- |
| Topic 8 | 12 | ASME framework, vessels, B31.3, design equation, fabrication, NDE, pressure testing, relief and ethics |
| Topic 9 | 13 | ISO framework, QMS, seven principles, risk, document control, PDCA, QA/QC |
| Topic 10.0 (1) | 63 | ISA identification, letters, symbols and lines, worked process examples, 15 document types, revision control |
| Topic 10.1 | 48 | Additional ISA examples, actuator failures, locations, instrument documents, revision example |
| Topic 11.0 | 55 | IEC 61508/61511, SIL, risk methods, lifecycle, hardware/software, SIS components and testing |
| Topic 11.0_compressed | 52 | Parallel functional-safety presentation; clearer layout for charts and diagrams |
| Topic 12.0 | 80 | Hazardous areas, protection, wiring, cables, grounding, shielding, installation and commissioning |
| Topic 12.1 | 37 | Functional-safety reinforcement, hardware/software lifecycle, SIS, risk graph and original 20-item quiz |

Read these corrections before memorizing:

- Topic 12.0's early dust-zone table incorrectly shows 0/1/2. Combustible dust uses **20/21/22**; the same deck gives these correctly later. Gas/vapor uses **0/1/2**.
- Its IEC dust-group table is mislabeled IIA/IIB/IIC. Dust uses **IIIA combustible flyings, IIIB nonconductive dust, IIIC conductive dust**. **IIA/IIB/IIC are gas groups**.
- **SIL means Safety Integrity Level**, not “Safety Integrated Level.” It applies to a safety function; a certified component alone does not establish the SIL of the complete loop.
- The SIL 4 RRF in Topic 12.1 contains a truncated number. The low-demand band is approximately **10,000–100,000**, with precise PFD boundaries given below.
- The slides sometimes simplify functional safety as protection from system malfunction. More broadly, it is the part of safety that depends on systems functioning correctly in response to their inputs, including responding to a hazardous process condition.
- Topic 9 asserts a September 2026 publication and detailed clause changes for ISO 9001:2026. These are **claims in the lecture, not independently verified here**. Study the slide wording for course context; do not treat the asserted new publication date or clause numbering as independently established requirements. This reviewer identifies those claims explicitly.
- Topic 10.1 cites several ISA editions and mixes older location/system symbol conventions. Use the assigned edition and drawing legend. Its “three-letter” explanation is a learning aid: valid tags may contain fewer or more than three letters.
- The pressure formula, test multipliers, vessel safety factors, SFF/HFT chart and installation rules in the slides are simplified. Actual engineering acceptance requires the applicable edition, service conditions, qualifications and limitations.

## 3. ASME standards and process piping — Topic 8

### Remember: framework and scope

**ASME** means American Society of Mechanical Engineers. Its codes establish requirements for safe design, construction, examination and testing of pressure equipment and piping.

| Code or section | Main subject / use |
| --- | --- |
| BPVC Section I | Power boilers |
| BPVC Section V | Nondestructive examination methods |
| BPVC Section VIII, Divisions 1, 2 and 3 | Pressure-vessel construction; the lecture compares Divisions 1 and 2 |
| BPVC Section IX | Welding and brazing procedure/personnel qualifications |
| ASME B31.1 | Power piping, including steam-generation applications |
| ASME B31.3 | Process piping: refineries, chemical, pharmaceutical, paper and cryogenic facilities |
| ASME B31.4 | Liquid transportation pipelines |
| ASME B31.8 | Gas transmission and distribution piping |

**BPVC versus B31:** BPVC addresses pressure equipment; the B31 series addresses piping systems. B31.3 covers design, materials, fabrication, assembly, erection, examination and testing. It includes pipe, fittings, flanges, valves, gaskets, bolts, expansion joints and supports. Media include petroleum products, chemicals, gas, steam and utility fluids.

**Section VIII:** The lecture describes unfired vessels above 15 psig (about 100 kPa gauge). Scope includes exceptions and boundaries; the pressure alone is not the entire applicability test. The lecture associates Division 1 with design by formula and a 3.5 safety-factor shorthand; Division 2 with more analytical design and a 3.0 shorthand. These are slide simplifications, not universal factors for every design. “U” and “U2” certification marks and Authorized Inspector verification support construction quality; an ordinary inspection sticker is not equivalent.

### Remember: service classification and loads

| Service / concept | What to know |
| --- | --- |
| Category D | Lecture limits: nonflammable, nontoxic, pressure at most 150 psi and temperature from −29°C to 186°C; typical utility air/water. Full code conditions also apply. |
| Category M | Highly toxic service in which very small exposure can cause serious irreversible harm; enhanced controls and examination. |
| High-pressure service | Special requirements apply; distinguish from simply calling any operating pressure “high.” |
| Severe cyclic conditions | Repeated stress cycles/thermal cycling demand special fatigue attention; not identical to high-pressure service. |
| Design pressure | Most severe applicable pressure condition, including relevant surges. |
| Design temperature | Applicable metal temperature used with pressure/material properties; the lecture emphasizes maximum wall temperature under sustained pressure. |
| Sustained loads | Weight and pressure. |
| Displacement/thermal loads | Restrained expansion/contraction and resulting stress range. |
| Occasional/environmental loads | Wind and earthquake effects. |

**Listed materials:** B31.3 Appendix A provides listed materials and allowable stress values, which depend on temperature. **Unlisted materials:** require permitted qualification/evaluation; being commercially available is insufficient. **Corrosion allowance c:** extra thickness for expected corrosion/erosion over service life. **Mill tolerance:** possible manufacturing under-thickness, separate from corrosion allowance.

### Understand and apply: wall thickness

Lecture equation for straight pipe under internal pressure:

**t = P D / [2(S E + P Y)]**

P = design pressure; D = outside diameter; S = allowable stress at design temperature; E = quality factor; Y = coefficient. Use consistent units. This slide form does not show every factor or applicability limit; some code formulations include weld-strength reduction W. Do not assume the slide expression covers every geometry, material or temperature.

A study calculation for selecting nominal thickness is:

**t_nominal ≥ (t + c) / (1 − m)**

Here m is the fractional negative mill tolerance; the lecture cites 12.5% as typical, not universal. Other mechanical allowances must also be included if applicable.

**Worked practice:** P = 2 MPa, D = 100 mm, S = 100 MPa, E = 1, Y = 0.4, c = 1 mm, m = 0.125.

- Pressure thickness = 200 / [2(100 + 0.8)] = **0.992 mm**.
- Including corrosion = 0.992 + 1 = **1.992 mm**.
- Nominal requirement = 1.992/0.875 = **2.277 mm**.
- Select a permitted standard size at least this thick and check all other loads and rules. This is a study example, not a complete piping design.

Why it matters: ordering a 1.992 mm nominal wall would ignore potential under-tolerance. Increasing temperature can lower S, increasing required thickness. Increasing corrosion allowance does not increase pressure strength of material that will eventually be consumed.

### Remember: fabrication and erection sequence

1. **Material control:** verify Material Test Reports (MTRs), heat numbers, material specification and traceability before cutting.
2. **Joint preparation:** beveling, cleaning, fit-up/alignment and preheat according to qualified WPS/PQR and applicable requirements.
3. **Welding/assembly:** use qualified welders, correct flange alignment, gasket position and controlled bolting sequence.
4. **PWHT:** post-weld heat treatment when required to control residual stresses and material properties. It is not automatically required for every weld.

**WPS** = Welding Procedure Specification: instructions for making the weld. **PQR** = Procedure Qualification Record: evidence that a procedure was qualified. Welder qualification is separate evidence that personnel can perform the welding.

### Understand: examination, inspection and pressure tests

| Activity | Responsibility / purpose | Methods or lecture values |
| --- | --- | --- |
| Examination | Contractor's qualified examiner evaluates construction | VT visual; RT radiographic; UT ultrasonic; PT liquid penetrant |
| Inspection | Owner's inspector verifies compliance and records | Materials, WPS/PQR, welder qualifications, examination records; B31.3 para. 340 cited |
| Hydrostatic test | Liquid pressure test | Lecture: 1.5 × design pressure, temperature-adjusted as applicable; minimum 10-minute hold, check leakage |
| Pneumatic test | Gas pressure test | Lecture: 1.1 × design pressure; stringent safety procedures and sensitive leak detection |

Section V supports examination techniques; the governing construction code supplies applicable acceptance requirements. The lecture links B31.3 Chapter VI and Section V. Do not assume Section V alone sets every construction acceptance limit.

**Why pneumatic testing demands care:** compressed gas stores much more releasable energy than a comparable liquid test. Test pressure selection must consider code limits, temperature/stress corrections and component limitations.

### Apply: overpressure, integrity and ethics

- Safety relief valves, rupture discs and thermal relief devices prevent damaging overpressure. A rupture disc normally requires replacement after operation; a relief valve may reseat.
- The lecture cites API 520/526 and Section VIII for relief-device selection/sizing context. API 526 particularly standardizes flanged steel pressure-relief-valve dimensions/orifices; not every cited document has the same purpose.
- API 570 addresses in-service piping inspection, rating, repair and alteration. API 579 addresses fitness-for-service assessment. Risk-based inspection prioritizes inspection based on risk; FFS evaluates whether damaged equipment remains suitable for service.
- Ethical actions: preserve truthful inspection records, maintain traceability, reject unsupported substitutions and refuse shortcuts that violate safety requirements.

**Scenario:** A contractor wants to accept a weld solely because it looks neat. Correct response: require the specified qualification records, applicable NDE and acceptance assessment. Appearance alone cannot establish compliance.

## 4. ISO standards and quality management — Topic 9

### Remember: framework

**ISO** = International Organization for Standardization, an independent nongovernmental organization of national standards bodies. The lecture states 170+ member bodies. Standards are developed through international consensus.

**Harmonized Structure / Annex SL framework:** shared clause organization and terminology support integrated management systems. The common ten-clause outline is: 1 Scope; 2 Normative references; 3 Terms and definitions; 4 Context; 5 Leadership; 6 Planning; 7 Support; 8 Operation; 9 Performance evaluation; 10 Improvement. Requirements are concentrated in Clauses 4–10.

| Standard | Management-system focus |
| --- | --- |
| ISO 9001 | Quality |
| ISO 14001 | Environment |
| ISO 45001 | Occupational health and safety |
| ISO/IEC 27001 | Information security |

**ISO 9001 QMS:** manage interrelated processes to deliver products/services meeting customer and applicable regulatory requirements, while improving customer satisfaction. A QMS is more than a final inspection checklist.

### Remember: seven quality-management principles

| Principle | Meaning | ICE example |
| --- | --- | --- |
| Customer focus | Meet requirements and pursue customer satisfaction | Select instrument range/accuracy to meet the actual process need |
| Leadership | Establish purpose, direction and commitment | Management supplies resources and upholds honest test reporting |
| Engagement of people | Competent, involved personnel | Train technicians and involve them in improvement |
| Process approach | Manage connected activities as a system | Link design, procurement, installation and commissioning |
| Improvement | Continually improve outcomes | Use recurring calibration errors to improve procedures |
| Evidence-based decision making | Decide using reliable facts and analysis | Use failure/test data rather than opinion |
| Relationship management | Manage supplier/stakeholder relationships | Qualify vendors and resolve quality issues collaboratively |

### Understand: risk-based thinking and documented information

**Clause 6.1:** address risks and opportunities before they harm results. Examples: identify supplier delays, sensor failure modes, obsolete drawings and compliance gaps. Opportunities include better methods, supplier improvements and reduced rework.

**Clause 7.5:** control documented information. “Documents” commonly prescribe work; “records” show what was done. Both require suitable identification, format, review, approval, access, protection, retrieval, retention and change control. Do not allow an obsolete P&ID to remain the uncontrolled field reference.

The Topic 9 lecture's asserted 2026 changes include quality culture, ethical conduct, climate considerations, planned change, and separate risk-mitigation/opportunity clauses 6.1.2/6.1.3. These statements are retained as **lecture-specific revision claims**; their publication status and exact new wording have not been verified. Core principles above remain useful independently of those claims.

### Remember and understand: PDCA

| Stage | Action | Instrumentation example |
| --- | --- | --- |
| Plan | Define objectives, requirements, processes, risks and resources | Set calibration tolerances and schedule |
| Do | Implement the planned process | Perform calibration using approved instructions |
| Check | Monitor/measure results against requirements | Review failures, drift and audit findings |
| Act | Correct causes and improve the process | Improve training/procedure and verify effectiveness |

**Correction versus corrective action:** fixing today's incorrect label is a correction; identifying and removing the cause of repeated wrong labels is corrective action. This distinction helps apply the lecture's root-cause and continual-improvement concepts.

### Understand and apply: QA versus QC

| Comparison | Quality Assurance (QA) | Quality Control (QC) |
| --- | --- | --- |
| Main focus | Process confidence and defect prevention | Product/output conformity and defect detection |
| Typical timing | Before and throughout execution | During production and on completed outputs |
| Activities | Quality plans, audits, SOPs, training, risk management | Material inspection, calibration verification, NDE, functional tests |
| Responsibility | Organization-wide, with management leadership | Personnel performing inspection/testing and responsible operations |
| Example | Audit the vendor's calibration process | Test whether this transmitter meets its accuracy specification |

The lecture uses “proactive QA/reactive QC” as a memory aid. QC can occur during work and prevent defective delivery; it is not restricted to the last step.

**Engineering application:** pre-execution vendor audits; traceable material certificates and software baselines; accurate audit trails; nonconformance records; root-cause analysis; corrective-action effectiveness; professional ethics and quality culture.

**Scenario:** repeated terminal-label errors are caught at final inspection. QC detects them. QA improvement addresses the labeling procedure, training and verification process. PDCA closes the loop by checking whether recurrence decreases.

## 5. Instrument identification and symbology — Topics 10.0 and 10.1

### Remember: ISA-5.1 purpose and vocabulary

ISA means International Society of Automation; older material uses historical organization names. ISA-5.1 establishes a shared instrumentation identification and graphical language. It supports P&IDs, process drawings, loop diagrams, maintenance and troubleshooting. Adoption may be contractual or regulatory; a consensus standard is not automatically a law everywhere.

- **Instrument:** device/function measuring, indicating, recording or controlling a variable.
- **Process variable:** measured property such as pressure, temperature, flow or level.
- **Loop:** connected instruments/functions accomplishing measurement or control.
- **Identification:** letters/numbers naming the function — “what is it?”
- **Symbology:** shapes and lines showing function, location/access and connections — “where/how is it represented?”

### Remember: tag structure and letter codes

**Tag = measured/initiating variable + function/modifier letters + loop number.** Example **TIC-103** = Temperature Indicating Controller, loop 103. Loop numbers associate related functions; project conventions may also encode area or service. A 900-series safety-loop convention is an example, not an ISA requirement.

**FT-101 → FIC-101 → FV-101:** flow transmitter, indicating controller and final control valve share loop 101. A valve serving a flow loop is tagged for that loop variable; it does not become a pressure instrument merely because its actuator uses air pressure.

| First letter | Measured / initiating variable shown in the lecture chart |
| --- | --- |
| A | Analysis |
| B | Burner / combustion |
| C, D, G, M, N, O | User's choice in the chart; confirm project definition |
| E | Voltage |
| F | Flow rate |
| H | Hand / manual |
| I | Electrical current |
| J | Power |
| K | Time / schedule |
| L | Level |
| P | Pressure / vacuum |
| Q | Quantity |
| R | Radiation |
| S | Speed / frequency |
| T | Temperature |
| U | Multivariable |
| V | Vibration / mechanical analysis |
| W | Weight / force |
| X | Unclassified |
| Y | Event, state or presence |
| Z | Position / dimension |

| Following letter / modifier | Meaning or use |
| --- | --- |
| A | Alarm |
| C | Control |
| D | Differential modifier, as in PDT |
| E | Sensor / primary element |
| F | Ratio/fraction modifier |
| G | Glass / viewing device |
| H / L | High / low; HH and LL for additional extreme thresholds |
| I | Indicate |
| J | Scan modifier |
| K | Time-rate-of-change modifier; control station in the chart's output column |
| M | Momentary modifier; middle/intermediate as a functional modifier |
| O | Orifice / restriction |
| P | Point / test connection |
| Q | Integrate / totalize modifier |
| R | Record |
| S | Switch; “safety” in a different modifier position |
| T | Transmit |
| U | Multifunction |
| V | Valve, damper or louver |
| W | Well |
| X | Unclassified / X axis depending on position |
| Y | Relay, compute or convert / Y axis depending on position |
| Z | Driver, actuator or unclassified final element / Z axis depending on position |
| B / N | User's choice where assigned in the chart |

Letters must be interpreted by position and the drawing legend. **T first = temperature; T following = transmit. I first = electrical current; I following = indicate.** Passive/readout functions include indicating and recording; active/output functions include controlling, switching and transmitting. Modifiers refine the meaning.

### Apply: decode common tags

| Tag | Interpretation |
| --- | --- |
| PT-101 | Pressure transmitter |
| PIT-101 | Pressure indicating transmitter |
| PDT-101 | Differential-pressure transmitter |
| PI / PIC / PRC | Pressure indicator / indicating controller / recording controller |
| TT / TI / TC / TIC / TR | Temperature transmitter / indicator / controller / indicating controller / recorder |
| FT / FI / FC / FIC / FR | Flow transmitter / indicator / controller / indicating controller / recorder |
| FE | Flow primary element |
| LT / LI / LC / LIC | Level transmitter / indicator / controller / indicating controller |
| LA / LAH / LAL | Level alarm / high / low |
| PSH / PSL | Pressure switch high / low |
| LSHH / LSLL | Level switch high-high / low-low |
| TSH | Temperature switch high; not a temperature transmitter |
| FY / TY | Flow-loop / temperature-loop relay or converter function; inspect legend for exact role |
| FV / TV / PV / LV | Final control valve in flow / temperature / pressure / level service |

### Remember and understand: instrument symbols and locations

The supplied symbol charts use circles for discrete instruments; a circle inside a square for shared display/shared control; hexagons for computer functions; and diamond-based programmable-logic symbols in an older convention. One chart also presents an alternative shared-control/SIS diamond-in-square convention. **The applicable edition and project legend decide the symbol. A shape alone does not establish a complete system's safety certification.**

| Lines across the instrument symbol | Lecture location/access convention |
| --- | --- |
| None | Field mounted, normally accessible at field location |
| One solid horizontal line | Primary/main panel or console, normally operator accessible |
| One dashed horizontal line | Behind main panel/in cabinet, normally inaccessible to operator |
| Two solid horizontal lines | Auxiliary/secondary/local panel, normally accessible |
| Two dashed horizontal lines | Behind secondary panel/field cabinet, normally inaccessible |

A P&ID is functional/schematic; use location/layout drawings for exact physical placement.

### Remember: process lines versus signal lines

**Process line = material path. Signal line = information/control path.** A major process pipe and a minor process/instrument connection are distinct from signal wiring.

Know these signal categories: unspecified signal; pneumatic; electrical/electronic analog or binary; hydraulic; filled capillary; guided electromagnetic/sonic (including fiber optics); unguided electromagnetic/sonic (wireless, radio, light, sound); communication/data links within one control system; links between independent systems; and mechanical links.

Common classroom conventions: continuous heavier line for main process piping, dashed line for electrical signal, and slash-marked line for pneumatic signal. Exact dash/slash patterns vary by legend and edition; the visual plates preserve the supplied charts. Do not confuse a filled capillary sensing connection with ordinary pneumatic signaling.

### Understand: common instruments and valves

- **Transmitter:** measures a variable and sends a signal, commonly 4–20 mA. Pressure, temperature, flow and level transmitters serve different measurements.
- **Indicator:** displays a value; indication alone does not regulate the process.
- **Controller:** compares measured value with setpoint and changes output to regulate the process.
- **Switch:** changes discrete state at a condition/threshold; high-high or low-low often supports a protective trip.
- **Control valve:** modulates flow as a final element. **Shutdown valve:** commonly on/off isolation. **PSV:** relieves overpressure. **Rupture disc:** one-time bursting protection.
- Gate valves commonly isolate; globe valves commonly throttle; ball/butterfly valves may isolate or regulate depending on design; check valves prevent reverse flow. Plug, angle, needle and three-way valves appear in the symbol charts; identify their drawing symbols and service purpose.

### Understand and apply: actuators and failure action

An actuator receives a command, uses an energy source, and produces mechanical motion. Energy may be pneumatic air, hydraulic pressure or electricity; motion may be linear or rotary. Symbols distinguish manual, pneumatic, motor, hydraulic and other operators.

| Failure action | Meaning | Typical safety reasoning |
| --- | --- | --- |
| FO | Fail open | Keep a required cooling path available |
| FC | Fail closed | Stop fuel or hazardous feed |
| FL | Fail locked / last position as specified | Hold position when the hazard analysis requires it |
| Indeterminate | Final position cannot be guaranteed | Never assume a safe position without evidence |
| FL/DO | Initially last position, then may drift open | Delayed opening must be considered |
| FL/DC | Initially last position, then may drift closed | Delayed closure must be considered |

Failure action depends on the complete actuator/accessory arrangement and the failure being considered. “Spring return” is a common implementation, not the only mechanism. A fail-closed heating valve is sensible when continued heating is hazardous; a cooling valve may need fail-open. Risk analysis determines the safe state.

### Apply: read, trace, interpret, verify

1. Identify equipment and process direction.
2. Follow major piping and branches.
3. Decode instrument tags and location symbols.
4. Follow signal types and paths.
5. Trace Process → Measurement → Controller → Final element → Process.
6. Explain the response to a change or failure.
7. Check setpoints, fail positions, interlocks and consistency with the legend/documents.

**Water chlorination example, Topic 10.0 pp. 21–22:** water passes the mixer/contact chamber; an analytical transmitter AT measures chlorine-related concentration; AIC compares that signal with a setpoint and adjusts the motor-operated chlorine valve. The diagram labels 4–20 mA measurement and control signals. Interpret feedback using the downstream measurement, not merely by naming the valve.

**Jacketed reactor example, pp. 23–24:** TT provides reactor temperature to TIC; the controller output passes through TY (electrical-to-pneumatic conversion in this drawing) to TV on the steam line. The figure shows 4–20 mA electrical and 3–15 psi pneumatic signals, instrument air, an air-to-open actuator, condensate return and a separate PT-to-PIR pressure-recording path. If temperature rises above setpoint, the intended heating-control response reduces steam. Keep the temperature loop separate from the pressure-indicating/recording path.

**Heated crude-oil example, Topic 10.1 p. 24:** trace feed from storage/pump through the heating coils and toward distillation; distinguish the flow-control function from the fuel/temperature-control function and the stack/emissions measurements. The figure labels FICV/TICV “fail safe compliant”; actual safe failure action must be established by the detailed valve notation and safety requirements, not that phrase alone.

## 6. Process control and instrumentation documentation — Topics 10.0/10.1

### Remember: choose the correct document

| Document | Main information | Typical question it answers |
| --- | --- | --- |
| PFD: Process Flow Diagram | Major equipment, streams, overall process and important conditions | What is the overall process? |
| P&ID: Piping and Instrumentation Diagram | Equipment, pipes, valves, instruments, control loops and process connections | How is the process connected, monitored and controlled? |
| Instrument index | Master inventory: tags, service, type, location, loop and drawing references | Which instruments exist? |
| Instrument data sheet | Device-specific range, accuracy, material, conditions, connections and signals | What must this instrument meet? |
| Instrument loop diagram | One loop's complete wiring, terminals, power, control-system channels and final element | Where does this signal go, wire by wire? |
| Hook-up / installation detail | Mounting, fittings, tubing, manifolds, supports and process connection | How is it physically installed? |
| I/O list | Control-system inputs/outputs, types, channels and associated tags | Which PLC/DCS channel serves this signal? |
| Wiring diagram | Electrical interconnections among instruments, boxes, panels and power | How are components electrically connected? |
| Terminal-block / connection diagram | Individual wire termination positions | Which terminal receives this wire? |
| Cable schedule | Cable ID, source, destination, type, size, cores and possibly length | Which cable runs between these locations? |
| Control narrative / philosophy | Written sequence, modes, control actions, alarms and interlocks | How should the system behave? |
| Cause-and-effect diagram / matrix | Triggering conditions and required actions | What shuts down when this condition occurs? |
| Alarm and setpoint list | Tags, alarm limits, control targets and trip thresholds | At what value does it alarm or trip? |
| Instrument location / layout | Physical positions of instruments, panels and junction boxes | Where is the device installed? |
| Calibration and test records | Results, accuracy, dates, adjustments and history | What was tested and did it pass? |
| Functional / logic diagram | Input conditions, gates, algorithms and outputs | Which logical conditions produce the action? |

An instrument index may also include signal/I/O type, units, setpoints, manufacturer, IP rating, hazardous-area classification and mounting details depending on project practice. A data sheet may organize identification, process conditions, instrument specifications, signal/wiring, additional information and related documents.

### Understand: closely related documents

- **PFD vs P&ID:** overall process overview versus detailed process/control relationships.
- **P&ID vs loop diagram:** functional connections versus detailed individual-loop interconnections.
- **Index vs data sheet:** project-wide summary versus detailed individual-device specification.
- **Hook-up vs loop diagram:** mechanical/process installation versus electrical/signal connection detail.
- **Logic diagram vs control narrative:** graphical conditions and actions versus written behavior, modes and sequence. Both help programmers, operators and technicians implement and test the same intent.
- **Cause-and-effect matrix vs narrative:** concise trigger/action mapping versus broader operational explanation.

### Understand and apply: logic and interlocks

**AND:** all required inputs true. **OR:** at least one input true. **NOT:** reverses a condition. A **permissive** must be satisfied to allow an action; an **interlock** prevents or forces an action under specified conditions. Confirm the project's use of these terms and trip/reset philosophy.

**Practice pump-start logic:** Start allowed = Start request AND Adequate level AND Discharge path available AND No active trip. With adequate level but an active trip, start remains blocked. A diagram documents the conditions; the narrative states sequence, modes, reset and operator response.

### Apply: document consistency and revision control

The same tag, equipment identity, units, signal type, symbols and engineering convention must agree across all related documents. A correct P&ID paired with an obsolete I/O list can still cause a hazardous installation error.

**Revision:** the actual change plus its identifying letter/number. **Document control:** the larger process of identification, preparation, checking, approval, issue/distribution, storage and maintaining current versions.

Sequence: Change identified → engineering review → update affected documents → assign revision → check/approve → issue current revision → archive/supersede previous revision. Archive the previous version for traceability; prevent unintended use in the field.

**Lecture PT-18 example:** adding a pressure transmitter changes P&ID Revision 3 to Revision 4. Review its location/specification; update related index, data sheet, loop, wiring/I/O and other affected documents; obtain approval; issue Revision 4 and supersede Revision 3.

**Troubleshooting example:** transmitter reads correctly locally, but PLC displays an incorrect value. Use the data sheet for range/signal, loop diagram for terminals/power/path, I/O list for channel assignment and configuration, and calibration/test records for evidence. P&ID alone is insufficient.

## 7. Functional safety — IEC 61508, Topics 11.0 and 12.1

### Remember: purpose, history and scope

IEC = International Electrotechnical Commission. **IEC 61508** is the general/multisector functional-safety framework for electrical, electronic and programmable electronic (**E/E/PE**) safety-related systems. The lectures give first edition 1998 and second edition 2010. Its principles support sector-specific standards.

**Functional safety:** safety depending on a system correctly performing its required response. Thermal insulation is passive protection; sensing overtemperature and tripping a motor is functional safety. The aim is tolerable risk supported by evidence, not a claim that risk becomes zero.

Basic sequence: Hazardous condition → Detection → Decision → Protective action → Defined safe state.

**Safety-related system:** implements required safety functions. Examples include emergency shutdown, safety interlocks, overtemperature trips, burner protection, turbine overspeed protection and fire/gas detection with protective action. In these slides SRS sometimes means Safety-Related System; in safety engineering it can also mean **Safety Requirements Specification**. Read the context.

### Remember and understand: risk and SIL

**Hazard:** potential source of harm. **Risk:** combines likelihood and consequence. **Risk assessment:** identify hazards, analyze likelihood/consequence, then evaluate tolerability. **Risk reduction:** implement and verify protective measures to close the gap. **ALARP:** As Low As Reasonably Practicable; it does not mean “any risk is acceptable if protection costs money.”

**SIL = Safety Integrity Level**, a discrete target for a safety function's integrity. Higher SIL requires stronger assurance and lower dangerous failure probability/rate; it does not describe process productivity or simply the seriousness of a hazard.

### Remember: SIL quantitative bands

For **low-demand** operation use average probability of failure on demand, **PFDavg**. Risk-reduction factor is approximately **RRF = 1/PFDavg**.

| SIL | PFDavg lower bound included, upper bound excluded | Approximate RRF band |
| --- | --- | --- |
| 1 | 10^-2 ≤ PFDavg < 10^-1 | Greater than 10 through 100 |
| 2 | 10^-3 ≤ PFDavg < 10^-2 | Greater than 100 through 1,000 |
| 3 | 10^-4 ≤ PFDavg < 10^-3 | Greater than 1,000 through 10,000 |
| 4 | 10^-5 ≤ PFDavg < 10^-4 | Greater than 10,000 through 100,000 |

Lecture tables often round these to 10–100, 100–1,000, 1,000–10,000, 10,000–100,000. At exact boundaries use PFDavg rather than an ambiguous rounded RRF label. IEC 61511 process applications normally use SIL 1–3; a requirement beyond SIL 3 calls for special attention and reconsideration of risk reduction. Do not assume every process SIS needs SIL 4.

For **high-demand/continuous** operation use **PFH**, the average frequency of dangerous failure per hour. Added quantitative reference: SIL 1 = 10^-6 to <10^-5/h; SIL 2 = 10^-7 to <10^-6/h; SIL 3 = 10^-8 to <10^-7/h; SIL 4 = 10^-9 to <10^-8/h. PFDavg is dimensionless; PFH has units per hour. Neither number alone proves all systematic and architectural requirements are met.

### Understand: hazard and risk methods

| Method | What it does | Important distinction |
| --- | --- | --- |
| HAZOP: Hazard and Operability Study | Multidisciplinary review of nodes using guide words and process parameters to identify deviations, causes, consequences and safeguards | Hazard identification/operability study; not simply a final SIL calculation |
| Risk graph | Follow a calibrated decision tree based on consequence, exposure/occupancy, avoidance and occurrence | Qualitative/semiqualitative SIL selection; graph calibration matters |
| LOPA: Layer of Protection Analysis | Estimate scenario frequency and credit qualifying independent protection layers to find additional risk reduction | Semi-quantitative method; results depend on assumptions and justified layer credits |

HAZOP examples: “No + Flow” = no flow; “More + Pressure” = high pressure; “Reverse + Flow” = reverse flow. Study nodes are sections of a process, often selected from P&IDs.

The lecture risk graph uses **C** consequence; **F** exposure frequency; **P** possibility of avoiding the hazard; **W** occurrence probability. In the illustrated graph, W1 is very low, W2 low, W3 high. The PFD equation's P means pressure; the risk graph's P means avoidance — context matters. The diagram shows minor injury through multiple deaths; rare-to-often versus frequent/permanent exposure; possible versus almost impossible avoidance. Follow the actual graph; do not invent a universal SIL from just one parameter.

Protection-layer examples: inherently safer process design → BPCS → alarm/operator response → SIS → physical protection (relief device, rupture disc, dike) → plant/emergency response. Some diagrams also show community emergency response. These are possible layers, **not automatic independent credits**. A qualifying IPL must be effective for the scenario, independent, dependable and auditable. Do not double-count one transmitter or control failure as two independent safeguards.

### Apply: LOPA and risk reduction

**Mitigated event frequency = Initiating-event frequency × product of credited IPL PFDs.**

**Required additional RRF = Frequency before additional SIF / Tolerable event frequency.**

**Required SIF PFDavg ≤ Tolerable frequency / Frequency before SIF.**

**Worked practice:** initiating event = 0.1/year; an existing independent layer has PFD = 0.1. Frequency before SIF = 0.01/year. Tolerable frequency = 0.00002/year. Required RRF = 0.01/0.00002 = **500**; required PFDavg ≤ **0.002**, within **SIL 2**. The complete design must still meet other SIL requirements.

**Second example:** measured/calculated PFDavg = 0.005 gives RRF = 200 and falls within SIL 2's numerical band. If the target is SIL 3, this numerical performance does not satisfy it.

### Remember: overall safety lifecycle

1. Concept, boundaries, operating conditions and scope.
2. Hazard and risk analysis.
3. Define overall safety requirements and required risk reduction.
4. Allocate safety functions to protection systems/layers.
5. Design and implement hardware/software and other protection.
6. Plan and perform installation and commissioning.
7. Validate safety functions against requirements.
8. Operate, maintain, diagnose and proof-test.
9. Control modifications and reassess affected risks.
10. Safely decommission/dispose.

The lecture's seven-stage and five-stage summaries group some of these steps. Safety management, competence, documentation, verification and assessment apply across the lifecycle, not just at final commissioning.

### Understand: IEC 61508-2 hardware

- **Random hardware failure:** unpredictable physical/electrical component failure. **Systematic failure:** introduced through specification, design, software, manufacturing or maintenance errors and triggered by conditions. Redundancy alone does not remove a shared design error.
- **Safe failure:** does not prevent the required safety action, though it may cause a spurious trip. **Dangerous detected (DD):** dangerous failure found by diagnostics. **Dangerous undetected (DU):** hidden dangerous failure not found by routine diagnostics.
- **Diagnostic coverage:** fraction of relevant dangerous failures detected by diagnostics. Detection also requires a suitable response/repair strategy.
- **Safe failure fraction (SFF):** proportion of safe plus dangerous-detected failures within the relevant failure population. Simplified study formula: SFF = (λS + λDD)/(λS + λDD + λDU). It is not the probability that a demand will succeed.
- **Hardware fault tolerance (HFT):** ability to continue the safety function despite hardware faults. HFT 1 means one relevant fault can be tolerated; it is not merely “one device installed.”
- **Redundancy/architecture:** voting and extra channels can improve integrity/availability, but common-cause failures must be considered.
- **Type A hardware:** failure modes sufficiently understood, behavior under fault determinable and supporting failure data available. Lecture example: a relay. **Type B:** one or more Type A conditions unmet; often more complex electronics. “Simple versus complex” is a useful first approximation, not the full definition.
- **FMEA:** Failure Modes and Effects Analysis. **FMEDA:** Failure Modes, Effects and Diagnostic Analysis; classifies modes/effects and diagnostic behavior to support failure-rate evaluation.

**Architecture notation:** MooN means M out of N channels must vote for the action. 1oo1: one channel; 1oo2: either of two can initiate; 2oo3: two of three must agree. DMR = dual modular redundancy; TMR = triple modular redundancy. Voting design balances dangerous failure, spurious trips, common-cause exposure and maintenance.

**Lecture SFF/HFT chart:** reproduced in the visual supplement. It corresponds to a particular architectural-constraint table, not a universal SIL lookup. The shown rows are SFF <60%, 60–<90%, 90–<99%, ≥99%; columns HFT 0/1/2; entries respectively N/A–SIL1–SIL2; SIL1–SIL2–SIL3; SIL2–SIL3–SIL4; SIL3–SIL4–SIL4. Device type, assessment route and standard edition must be checked before applying it.

### Understand: IEC 61508-3 software

IEC 61508-3 covers safety-related software and relevant development/configuration tools. Stages: specify software safety requirements and systematic capability → architecture/design/coding and suitable languages/tools → module and integration testing/verification → safety validation → operation, maintenance and controlled modification.

Applications: emergency shutdown, burner/boiler protection, turbine overspeed protection, safety interlocks, fire and gas systems. Software correctness depends on disciplined lifecycle evidence; multiplying a software “failure probability” into hardware PFD does not replace this work. **IEC 62443** provides industrial automation/control-system cybersecurity context; cyber threats can undermine safety.

### Understand and apply: SIL verification and maintenance

**Verification:** check that outputs of a phase meet its inputs/requirements; SIL verification evaluates the complete function against target integrity, including PFDavg/PFH, failure rates, architecture, diagnostics, common cause, proof-test interval and coverage. **Validation:** demonstrate that the installed integrated safety function satisfies the specified safety requirements in its intended use.

Maintenance strategies: risk-based (prioritize consequence), preventive (scheduled work), condition-based (respond to measured condition), predictive (forecast failure from data), corrective (repair failed equipment). Maintenance preserves the achieved integrity; a certificate does not maintain the equipment.

Added study relationship for a simplified 1oo1 low-demand subsystem: **PFDavg ≈ λDU × T / 2**, assuming constant failure rate, effective periodic proof testing and other simplifying conditions. T is proof-test interval, λDU is dangerous-undetected failure rate in matching time units. If λDU = 10^-6/h and T = 8,760 h, PFDavg ≈ 0.00438. Halving T approximately halves this contribution. Actual complete-loop calculations also include other failure modes, repair, diagnostics, redundancy and proof-test coverage.

## 8. Safety Instrumented Systems — IEC 61511, Topics 11.0/12.1

### Remember: scope and distinctions

**IEC 61511** applies functional-safety lifecycle principles to process-industry SIS: design, specification, installation, commissioning, validation, operation, maintenance, modification and decommissioning. The lecture gives first edition **2003**. Industries include oil/gas, chemical, petrochemical, pharmaceutical and power.

Related standards named in the material: IEC 61508 general framework; IEC 61511 process sector; IEC 62061 machinery; IEC 61513 nuclear sector; ISA-84 process safety instrumentation; IEC 62443 industrial cybersecurity. Different industries have different scope requirements.

| Term | Meaning | Example |
| --- | --- | --- |
| BPCS | Basic Process Control System: normal regulation | PIC modulates a valve to maintain routine pressure |
| SIS | Complete protective system implementing one or more safety functions | Independent safety sensors, logic and shutdown equipment |
| SIF | One specified safety instrumented function | High-high vessel pressure closes the inlet valve |
| SIL | Required integrity of that function | SIL 2 target for that shutdown after risk analysis |

The SIS must provide the required independence from the BPCS. Shared sensors, utilities, logic, networks or final elements can create common-cause/common-mode vulnerabilities. The lecture emphasizes physical and functional independence; assess actual architecture and independence requirements, rather than assuming a second software routine is independent protection.

### Remember and understand: three basic elements

**Process → Sensor → Safety logic solver → Final element → Safe state.**

| Element | Role and examples | Strengths | Limitations / failures |
| --- | --- | --- | --- |
| Sensor / initiator | Detect pressure, temperature, level, flow, gas or flame; send electrical/digital input | Fast, varied, redundancy possible, relatively economical | Drift, fouling, harsh environment, false trips, missed detection; needs testing |
| Logic solver | Evaluate inputs, AND/OR/voting, diagnostics and watchdogs; command protective outputs | Programmable, high diagnostic coverage, redundant options, certified capabilities | Cost, programming complexity, cyber exposure, shared/common-cause failure |
| Final element | Physically stop, isolate, vent or de-energize: shutdown valve, contactor, breaker, damper, actuator | Direct protective action, fail-safe arrangements, redundant options and feedback | Sticking, slow stroke, mechanical wear, air/power dependency, hidden faults |

Final elements often dominate PFD in a real loop, but this is not universal; calculate rather than assume. A command to close is not proof that a valve fully closed in time.

**Applications from the lectures:** sensors on wellheads, reactor level, boiler temperature, sterile-line flow, chlorine-room gas; refinery ESD logic, reactor trip logic, LNG gas/ESD, machine relays, pipeline safety logic; final ESD/block valves, breakers/trip relays, motor-operated isolation and blowdown valves. A nuclear or machinery example illustrates architecture, not automatic IEC 61511 jurisdiction.

### Apply: define and assess a SIF

Example: reactor overpressure could rupture a vessel and release toxic/flammable material. Define the SIF: **if pressure reaches the specified high-high threshold, close the feed shutdown valve within the required response time and maintain the defined safe condition.** Sensor: PT. Logic: safety PLC. Final element: shutdown valve and its actuation accessories. Determine SIL from risk analysis, then verify the entire function. Technology, architecture, response time and lifecycle activities all affect performance.

A usable safety-requirements specification states the hazard, trigger/setpoint, response, safe state, response time, operating mode, target SIL, reset/bypass behavior and testing requirements. These details are added explanatory guidance for applying the slides' lifecycle concepts.

### Understand: testing and proof testing

| Activity | Main purpose | Limitation |
| --- | --- | --- |
| General maintenance | Inspection, calibration, servicing, repair/replacement | Does not automatically reveal every hidden dangerous failure |
| Diagnostic testing | Automatic self-checks by smart devices/logic | Only detects covered failure modes |
| Functional testing | Confirm required input-to-action behavior | Scope must match requirements; one successful action is not lifetime reliability evidence |
| Partial-stroke test | Move valve through part of its travel, often online | Does not prove full stroke, shutoff tightness or every failure mode |
| Full proof test | Periodically expose dangerous hidden failures; test sensor–logic–final-element path as specified | Coverage must be justified; not every procedure achieves 100% |

Full proof testing is often planned for shutdowns/turnarounds. Record procedure, dates, actual results, pass/fail, as-found/as-left state, detected faults, repairs and restoration. Compare field failure data with design assumptions.

**Bypass management:** authorize, assess risk, apply compensating protection, limit duration, record status, control reinstatement and confirm normal protection is restored. Leaving a bypass enabled after a successful test defeats the safety function.

**Scenario:** diagnostics report healthy, but the shutdown valve is mechanically stuck. Diagnostics that only check the electrical output will not find this failure. Appropriate proof testing and mechanical maintenance are still necessary.

## 9. Hazardous-area classification and protection — Topic 12.0

### Remember: concepts and classification systems

A hazardous area can contain an ignitable mixture of air with gas, vapor, dust or fibers/flyings. Classification describes material type and likelihood/duration of an explosive atmosphere so equipment and installation can be selected correctly. It is documented on area-classification drawings and made available to designers, installers, inspectors, maintainers and operators.

Normal operation versus abnormal release matters. A hazardous chemical is not automatically an explosive atmosphere; the material, concentration, release conditions and ignition potential matter.

| System / zone | Atmosphere occurrence |
| --- | --- |
| Gas/vapor Zone 0 | Continuous, frequent or long periods |
| Gas/vapor Zone 1 | Likely occasionally during normal operation |
| Gas/vapor Zone 2 | Unlikely in normal operation; brief if it occurs |
| Dust Zone 20 | Dust cloud continuous, frequent or long periods |
| Dust Zone 21 | Dust cloud likely occasionally in normal operation |
| Dust Zone 22 | Dust cloud unlikely normally; brief if it occurs |
| Division 1 | Ignitable concentrations can exist in normal operation or specified frequent conditions |
| Division 2 | Normally absent; possible under abnormal conditions or specified failure conditions |

Zones and divisions are separate systems with different detailed definitions. Zone 0/1 is broadly associated with Division 1 severity and Zone 2 with Division 2, but this is not an exact interchangeable mapping.

### Remember: classes and material groups

**NEC classes:** Class I = flammable gases/vapors; Class II = combustible dust; Class III = ignitable fibers/flyings (added clarification relevant to the deck's fibers discussion).

| IEC gas group | Lecture example | Protection demand |
| --- | --- | --- |
| IIA | Propane | Least demanding of these gas groups |
| IIB | Ethylene | More demanding than IIA |
| IIC | Hydrogen, acetylene | Most demanding of these gas groups |

Do not confuse **NEC Class I** with **IEC gas group IIC**: one states hazard type, the other a gas subgroup. Suitable IIC certification can generally cover less demanding IIB/IIA gases when all other certification conditions are satisfied; gas group alone is not complete suitability.

| IEC dust group — corrected | Material | Examples in lecture |
| --- | --- | --- |
| IIIA | Combustible flyings | Textile fibers/lint |
| IIIB | Nonconductive combustible dust | Flour, grain, sugar, wood dust |
| IIIC | Conductive combustible dust | Conductive metal/carbon/graphite dusts; verify the actual material |

| NEC/NFPA Class II dust group | Typical material |
| --- | --- |
| E | Combustible metal dust |
| F | Carbonaceous dust |
| G | Grain and other qualifying combustible dust |

Dust clouds and accumulated layers both matter; deposits can insulate hot surfaces or become airborne. Examples: gasoline dispensing and solvent spray areas are gas/vapor hazards; chemical/hydrocarbon plants may release flammable vapors; hydrogen areas require suitable gas-group selection; grain/wood/metal dust processes require dust assessment.

### Remember and apply: temperature classes

| T-class | Maximum equipment surface temperature |
| --- | --- |
| T1 | 450°C |
| T2 | 300°C |
| T3 | 200°C |
| T4 | 135°C |
| T5 | 100°C |
| T6 | 85°C |

A higher T number means a lower permitted surface temperature. This is not a process-temperature rating or ambient-temperature range. For a gas selection, maximum surface temperature must be suitably below the material's ignition temperature under applicable rules. Dust requires separate cloud/layer temperature assessment and marking; the gas T1–T6 table is not the whole dust-temperature selection method.

**Practice:** if a gas autoignites at 180°C, T3 (200°C) is unsuitable. T4 (135°C) meets the simple temperature comparison, as do cooler classes, provided every other suitability condition is met.

### Remember and understand: explosion-protection methods

| Marking | Principle | Memory cue |
| --- | --- | --- |
| Ex d, flameproof | Contain an internal explosion and prevent flame transmission through designed joints/flamepaths | Contain |
| Ex i, intrinsic safety | Limit electrical/thermal energy under specified conditions and faults | Limit energy |
| Ex e, increased safety | Measures against arcs/sparks and excessive temperature for the covered equipment | Prevent ignition source |
| Ex p, pressurization/purging | Protective gas pressure keeps hazardous atmosphere out; purge as required before energizing | Exclude atmosphere |
| Ex m, encapsulation | Protective compound isolates components capable of ignition | Encapsulate |
| Ex o, oil immersion | Protective liquid separates ignition sources from atmosphere | Immerse |
| Ex q, powder filling | Filling material prevents ignition transmission | Fill |
| Ex t, protection by enclosure | Dust ingress protection plus surface-temperature control | Exclude dust/control heat |

Flameproof “Ex d” and North American “explosion-proof” use related containment principles but are not automatically identical certifications. Choose the actual approval needed. Protection method alone does not prove suitability for every zone: verify subtype, equipment protection level, material group, temperature, ambient limits and certificate conditions.

**Intrinsic safety vs explosion-proof:** Ex i prevents ignition-capable energy; containment protection manages an internal ignition without igniting the external atmosphere. An intrinsic-safety barrier/isolator, field device and cable must be assessed as a system. Low operating voltage alone does not prove intrinsic safety.

### Apply: equipment selection sequence

1. Read the area-classification drawing: applicable zone/division and hazard.
2. Identify gas/dust material and group.
3. Check temperature requirements and ambient/process conditions.
4. Select permitted protection method and protection level/category.
5. Verify certification/marking and any special conditions.
6. Check associated cables, glands, seals, barriers, bonding and accessories.
7. Install and inspect to the applicable requirements; retain records.

Examples from slides: flow detectors need appropriate classified-area suitability; pressure-switch enclosure design must suit the location; fixed gas detectors may use intrinsic-safety or containment designs depending on certification. IP ingress rating alone is not hazardous-area approval.

## 10. Electrical and instrumentation installation — Topic 12.0

### Remember and understand: power and instrumentation wiring

| Feature | Electrical/power wiring | Instrumentation wiring |
| --- | --- | --- |
| Main purpose | Deliver energy to motors, heaters, panels and power supplies | Carry measurement/control/communication information |
| Typical signals/levels | 120/240 V AC and higher industrial supplies in lecture | 4–20 mA, digital I/O, RTD, thermocouple, networks |
| Key checks | Voltage/current rating, insulation, installation/environment, protection, termination and PE | Correct polarity, terminals, wire IDs, continuity, signal integrity and shielding |
| Typical path | Source → protection → control → load | Field instrument → junction box → terminal block → PLC/DCS |

Power components include conductors, conduits, MCB/MCCB breakers, contactors and grounding. MCB = miniature circuit breaker; MCCB = molded-case circuit breaker. Instrument loop drawings provide physical interconnection details. A two-wire transmitter may use the same loop conductors for power and signal; functional categories do not mean every instrument cable carries zero power.

### Remember: cable selection

- **Conductor material/size:** ampacity, permissible voltage drop, route length and mechanical requirements.
- **Insulation/jacket:** voltage/temperature rating, chemicals, moisture, UV/fire requirements and site conditions. XLPE = cross-linked polyethylene; PVC = polyvinyl chloride; LSZH = low smoke zero halogen.
- **Shielding:** foil or braid, often with drain wire, to manage EMI/RFI.
- **Armoring:** mechanical protection such as steel wire armor or suitable metal armor. Armor and shielding serve different primary purposes.
- **Compatibility:** signal type, thermocouple/RTD requirements, communication characteristics, gland/cable fit and hazardous-area requirements.

### Understand and apply: segregation and routing

Lecture categories: 1 power/high voltage; 2 AC/DC control; 3 analog/low-level instrumentation; 4 data/communications.

Use appropriate separate trays, raceways, conduits or barriers. Maintain required clearances for parallel runs; cross power and sensitive signal cables near 90° where necessary to reduce coupling. Do not invent one universal separation distance; it depends on the applicable standard, voltage, cable and installation. Applicable requirements can also require segregation of intrinsically safe circuits.

The lecture cites IEEE 518 for reducing electrical noise, NEC/IEC wiring rules, and ISA-RP12.06.01. The latter is specifically associated with intrinsically safe-system installation; do not treat its citation as one universal rulebook for all general-purpose wiring.

**EMI** = electromagnetic interference; **RFI** = radio-frequency interference. Noise sources include power cables, switching devices and drives. Shielding and segregation complement correct grounding and termination; one does not eliminate the need for the others.

### Understand: grounding and bonding

| Concept | Main role | Key implication |
| --- | --- | --- |
| Grounding / earthing | Connect system/equipment to earth or designated reference | Reference potential, transients, static and shock protection as designed |
| Bonding | Electrically join conductive metal parts | Equalize potentials and provide continuity/low-impedance fault-return path |
| Protective earth (PE) | Personnel/equipment safety | Must not be defeated to cure signal noise |
| Signal / instrument reference | Support reliable low-level measurements | Must be coordinated with protective bonding and system design |
| Shield termination | Drain coupled interference appropriately | Follow system/manufacturer/EMC requirements |

The lecture calls instrument reference “clean ground” and illustrates single-point shield grounding, usually at the panel, to avoid low-frequency ground-loop currents. **This is not permission to leave exposed metal unbonded or create an unsafe isolated protective earth.** Earth is not a perfect zero-volt reference everywhere; voltage differences can exist. Fault protection depends on an effective return path to the source and protective-device operation, not simply driving an earth rod.

One-end shield grounding is common for many analog loops. Some high-frequency/network EMC designs require different or both-end terminations. Apply the appropriate design; do not ground every shield identically by habit.

### Remember: shielding types

| Shield | Characteristics |
| --- | --- |
| Foil | Thin conductive layer, high coverage, useful for high-frequency interference; drain wire supports termination |
| Braid | Woven copper/tinned copper, flexible and mechanically durable |
| Foil + braid | Combines coverage and mechanical robustness for demanding applications |

**Scenario:** a flow reading becomes unstable whenever a nearby motor drive operates. Check routing/segregation, shield continuity/termination, reference/ground-loop issues and manufacturer EMC requirements. Recalibrating the transmitter repeatedly does not remove induced electrical noise.

### Remember and understand: conduits, trays and glands

- **Conduit:** enclosed protective cable pathway. The slide's visual examples include rigid metal (RMC), intermediate metal (IMC), electrical metallic tubing (EMT), flexible metal (FMC), liquidtight flexible metal (LFMC), PVC/rigid nonmetallic, electrical nonmetallic tubing (ENT) and liquidtight flexible nonmetallic (LFNC). Select according to environment, movement, mechanical demands and rules.
- **Cable tray:** supports and organizes multiple cables along a planned route while allowing required separation. It is not the same as a sealed conduit.
- **Cable gland:** equipment-entry/termination interface; selection must fit cable, enclosure, sealing, mechanical retention, armor bonding and protection requirements as applicable. A generic gland may invalidate hazardous-area suitability.

### Remember: installation lifecycle and considerations

1. **Planning/design:** choose variables/instruments; locate equipment; design panels/routes.
2. **Procurement/delivery:** verify certificates, equipment condition and bench calibration/testing.
3. **Physical/electrical installation:** mount instruments/panels; route cables; connect impulse tubing, utilities and wiring.
4. **Commissioning/calibration:** loop-check, verify ranges/signals and control response.
5. **Maintenance/monitoring:** periodic inspection, troubleshooting and controlled upgrades.

Use layout drawings for physical dimensions/supports and schematics for connectivity. Mounting must withstand vibration; tubing/piping must suit fluid, pressure and temperature. Hazardous-area installations require their approved intrinsic-safety, enclosure or purge design to remain intact.

### Understand and apply: inspection, testing and commissioning

| Stage | Question | Representative activities |
| --- | --- | --- |
| Inspection | Is it installed according to the approved design? | Mounting, labels, cable routes, glands, connections, grounding/bonding, workmanship |
| Testing | Does the tested item/path meet the procedure's requirements? | Continuity/polarity, signal checks, calibration, loop checks and protective-function tests |
| Commissioning | Does the integrated system work as intended for operation? | End-to-end operation, modes, alarms/interlocks, process response, acceptance/handover |

One Topic 12.0 slide headed “Testing” actually describes commissioning; use the distinction above. Follow approved procedures and protect sensitive electronics during electrical tests. Complete defects, record results and update as-built documents before handover.

Added study check for a linear 4–20 mA signal:

**I = 4 + 16 × (PV − LRV)/(URV − LRV) mA.**

For a 0–100 kPa range: 0 = 4 mA; 25 = 8 mA; 50 = 12 mA; 75 = 16 mA; 100 = 20 mA. A correct local reading with wrong DCS scaling is a loop/configuration issue, not necessarily sensor failure. Fault currents and special configurations require device-specific interpretation.

## 11. Practice bank — remembering

Answer before checking the key. These are added study questions, independent of the professor's numbering.

| No. | Question |
| --- | --- |
| R1 | Which ASME code primarily addresses process piping? |
| R2 | Which BPVC section covers welding/brazing qualifications? |
| R3 | What does corrosion allowance compensate for? |
| R4 | Name four examination methods from Topic 8. |
| R5 | What hydrostatic and pneumatic pressure multipliers appear in the lecture? |
| R6 | Which ISO standard addresses QMS, and which clause addresses documented information in the lecture? |
| R7 | List the seven quality-management principles. |
| R8 | Expand PDCA. |
| R9 | Decode TIC-103, PDT-101 and LSHH. |
| R10 | What is the shared number in FT-101/FIC-101/FV-101? |
| R11 | Which document lists all instruments? Which gives one device's detailed specification? |
| R12 | Which diagram gives a loop's terminals and wiring? |
| R13 | Expand SIS, SIF, SIL and BPCS. |
| R14 | What are the three basic SIS elements? |
| R15 | Which standard is general functional safety; which is process-sector SIS? |
| R16 | What do PFDavg and PFH describe? |
| R17 | Give gas and dust zone numbers from most frequent to least frequent atmosphere. |
| R18 | Give the gas groups and corrected IEC dust groups. |
| R19 | What are the six T-class maximum temperatures? |
| R20 | Expand FO, FC, FL, EMI, RFI and PE. |

### Remembering answer key

R1 B31.3. R2 Section IX. R3 Expected corrosion/erosion metal loss. R4 VT, RT, UT, PT. R5 1.5 and 1.1 times design pressure, with applicable code corrections/limits. R6 ISO 9001; 7.5. R7 Customer focus, leadership, engagement of people, process approach, improvement, evidence-based decisions, relationship management. R8 Plan–Do–Check–Act. R9 Temperature indicating controller loop 103; differential-pressure transmitter loop 101; level switch high-high. R10 Loop identification. R11 Instrument index; data sheet. R12 Instrument loop diagram. R13 Safety Instrumented System; Safety Instrumented Function; Safety Integrity Level; Basic Process Control System. R14 Sensors, logic solver, final elements. R15 IEC 61508; IEC 61511. R16 Average probability of failure on demand; average frequency of dangerous failure per hour. R17 Gas 0/1/2; dust 20/21/22. R18 Gas IIA/IIB/IIC; dust IIIA/IIIB/IIIC. R19 T1 450, T2 300, T3 200, T4 135, T5 100, T6 85°C. R20 Fail open, fail closed, fail locked/last as specified, electromagnetic interference, radio-frequency interference, protective earth.

## 12. Practice bank — understanding, with model answers

**U1. Why is passing a final QC test insufficient to prove a good QMS?** A QMS also controls processes, competence, suppliers, risk, documentation, nonconformity and improvement. A passing sample does not establish consistent future results.

**U2. Why does allowable stress depend on design temperature?** Material strength/allowable properties change with temperature; selecting room-temperature stress data may underestimate required wall thickness.

**U3. Why distinguish examination from inspection?** Examiners perform/evaluate the specified examinations; the owner's inspector verifies compliance and supporting evidence. One activity does not remove the other's responsibilities.

**U4. Why are two instrument tags with “T” not necessarily both temperature devices?** Letter meaning depends on position. FT is a flow transmitter; TT is a temperature transmitter.

**U5. Why is a loop diagram needed when a P&ID exists?** A P&ID conveys process and control relationships; a loop diagram supplies detailed wiring, terminals, channels and power for installation/testing.

**U6. Why can an unchanged instrument tag still require document revisions?** Range, wiring, mounting, location, setpoint or function may change without a new tag. Related technical details must remain consistent and approved.

**U7. Why is a SIL 3-capable PLC insufficient to claim a SIL 3 SIF?** Sensor, final element, architecture, diagnostics, proof testing, common cause, software and lifecycle evidence also determine complete-function integrity.

**U8. Why is LOPA called semi-quantitative?** It uses numerical scenario frequencies and PFD estimates with simplifying assumptions and order-of-magnitude data. “Exact” arithmetic does not make its assumptions exact.

**U9. Why are proof tests necessary if diagnostics are continuous?** Diagnostics cover only some failure modes; dangerous hidden faults may remain until a suitable proof test reveals them.

**U10. Why doesn't redundancy eliminate common-cause failure?** Two channels can share power, environment, software, maintenance error or a common process connection. One cause may defeat both.

**U11. How does intrinsic safety differ from flameproof containment?** Intrinsic safety limits ignition-capable energy; flameproof design contains an internal explosion and prevents ignition spreading outside.

**U12. Why is Zone 2 still hazardous?** An explosive atmosphere can still occur under abnormal conditions, even if infrequently and briefly; suitable equipment and installation remain required.

**U13. Why does a higher T-class number mean a cooler limit?** T1–T6 are class labels; permitted maximum temperature falls from 450°C to 85°C as the class number rises.

**U14. Why are shield, armor and protective earth not interchangeable?** Shielding addresses electromagnetic noise, armor primarily mechanical damage, and PE electrical fault safety. Each must perform its designed function.

**U15. Why do signal and power cables cross at roughly 90°?** It reduces the parallel coupling length and interference compared with long adjacent runs; required segregation remains necessary.

**U16. Why must commissioning follow inspection and testing?** A visibly correct installation may have electrical faults; individually tested devices may still interact incorrectly. Commissioning verifies the integrated behavior needed for operation.

## 13. Practice bank — applying, with worked answers

### Group A: ASME, ISO and ISA

**A1. A refinery process line and a long-distance gas distribution pipeline need code selection.** Use B31.3 for the process line and B31.8 for gas distribution, subject to boundaries/jurisdiction. Do not choose Section VIII simply because both are pressurized.

**A2. A water utility line has 120 psi design pressure and 30°C design temperature. Is it automatically Category D?** These values fit the lecture's numeric limits, but verify all Category D fluid/harm and code conditions. Pressure/temperature alone are insufficient.

**A3. A pipe needs 2.4 mm pressure thickness, 1.0 mm corrosion allowance and 12.5% mill allowance. Find nominal minimum.** (2.4 + 1.0)/0.875 = **3.886 mm**. Select an acceptable standard thickness meeting this and all other requirements.

**A4. A 10 MPa design line is proposed for a 15 MPa hydrotest. Is this immediately approved?** It matches the lecture's 1.5 multiplier, but applicable stress/temperature adjustments, component limits, procedure and test conditions must still be checked.

**A5. A supplied alloy lacks its MTR and heat traceability; schedule pressure favors immediate installation.** Hold for proper verification under the quality/material-control process. Schedule does not justify inventing or bypassing evidence.

**A6. A vendor audit finds an inadequate calibration procedure, but none of this project's devices has yet failed. QA or QC?** **QA**: assess/improve the process before defective output. Testing each delivered device is QC.

**A7. Workers have two different P&ID revisions.** Identify the approved current issue, withdraw/supersede obsolete field copies, reconcile related documents and preserve the revision history under document control.

**A8. A controller tag is FIC-210, and its associated transmitter is FT-210. Name the final valve tag in the lecture convention.** **FV-210**. FIC indicates flow, indication and control; 210 ties the loop together.

**A9. A tag reads PIT-420. Is it a temperature instrument because it ends in T?** No. It is a pressure indicating transmitter, loop 420. First P establishes pressure.

**A10. A cooling valve must keep coolant available after instrument-air loss.** Select/verify a **fail-open** arrangement if the hazard analysis defines that safe state. Verify the complete actuator/accessory assembly, not just the label.

**A11. A steam-heating loop uses TT–TIC–TY–TV; reactor temperature exceeds setpoint.** For the lecture's heating function, TIC should reduce steam by driving TV toward closed through the converter. Confirm configured control/actuator direction and failure action.

**A12. A chlorination AIC reads a low residual downstream of the contact chamber.** The control loop would normally increase chlorine dosing toward the target, within constraints. Trace AT measurement → AIC → chlorine valve and verify the actual process/control narrative.

### Group B: documents, IEC 61508 and IEC 61511

**A13. A technician needs a pressure transmitter's wetted material and accuracy before purchase.** Use its **data sheet**, not the instrument index alone.

**A14. A technician needs the exact junction-box terminal number for FT-101.** Use the **loop diagram/terminal connection drawing**, checking current revision and wire IDs.

**A15. A team adds PT-18. Name at least six potentially affected documents.** P&ID, index, data sheet, loop diagram, I/O list and wiring/terminal drawings. Also check cable schedule, hook-up, layout, alarms and narrative/cause-and-effect as applicable.

**A16. A pump can start only with adequate suction level and a confirmed open discharge path. Level is adequate, discharge is closed.** The AND permissive is false; block start. Do not bypass the condition to satisfy the start request.

**A17. Vessel pressure high-high must stop feed automatically. Identify SIS elements and the SIF.** PT senses; safety logic evaluates; shutdown valve/actuator closes. The SIF is the complete specified high-high-pressure-to-feed-isolation function, including timing and safe state.

**A18. A calculated low-demand PFDavg is 0.003. Find RRF and numerical SIL band.** 1/0.003 ≈ **333**; **SIL 2 numerical band**. This alone does not establish complete SIL compliance.

**A19. Target SIL is 3; calculated PFDavg is 0.002.** Fails the SIL 3 numerical target: 0.002 belongs to SIL 2. Review the complete design, architecture, failure data, diagnostics and test assumptions; do not relabel the target.

**A20. Initiating event 0.2/year, existing qualifying IPL PFD 0.1, tolerable frequency 0.00001/year.** Before SIF: 0.02/year. RRF required: **2,000**. Required PFDavg ≤ **0.0005**, within **SIL 3** numerical band.

**A21. Two protective claims use the same failed sensor. Can their PFDs simply be multiplied?** No. Independence is not established; analyze shared-cause failure and avoid double-counting credits.

**A22. A 1oo2 temperature voting scheme has one channel above the trip threshold.** “One out of two” can initiate the trip under the specified logic. With 2oo3, one high channel alone does not meet the vote; two are needed.

**A23. A proof-test interval doubles while constant λDU and simplifying assumptions remain unchanged.** The simple λDU T/2 contribution approximately **doubles**, weakening integrity; reassess target compliance.

**A24. A partial-stroke valve test passes; the team wants to cancel the full proof test.** Partial travel does not prove full travel, shutoff, complete sensor-to-element behavior or all DU modes. Follow the verified proof-test strategy and credited coverage.

**A25. A software change modifies a trip setpoint after commissioning.** Apply controlled modification: review risk/requirements and authorization; update software/documents; verify and validate the affected function; record and manage restoration.

**A26. A test passes but the bypass indication remains active.** Restore protection under controlled procedure and verify normal status before declaring the function available. Record the test and restoration.

### Group C: hazardous areas and installation

**A27. A dust cloud is likely occasionally during normal production.** **Zone 21**, not Zone 1. Determine material group and other selection requirements separately.

**A28. Hydrogen equipment is marked suitable only for gas group IIA.** Do not assume suitability: hydrogen is IIC in the lecture. Select appropriately certified IIC equipment meeting all other requirements.

**A29. A device's maximum surface temperature is 200°C and gas ignition temperature is 170°C.** Unsuitable on the temperature comparison; choose an appropriately cooler certified device, for example T4's 135°C limit if other requirements are met.

**A30. An instrument is 24 V DC, so an installer calls it intrinsically safe.** Voltage alone is insufficient. Verify certified equipment/associated apparatus, energy limits, cable parameters and complete installation requirements.

**A31. An Ex d enclosure needs a new cable entry; the installer proposes an ordinary unmatched gland.** Use an entry/gland/seal arrangement permitted by the enclosure's certification and applicable installation rules. A generic substitution can defeat protection.

**A32. A transmitter signal cable runs beside a high-power motor cable for 60 m and readings become noisy.** Correct routing/separation, verify shield/reference/termination, and assess drive-related interference. Use appropriate crossing geometry where paths meet.

**A33. A technician removes PE because it seems to reduce measurement noise.** Restore protective bonding. Diagnose shield termination, ground loops and EMC without defeating electrical safety.

**A34. A 0–200°C linear transmitter produces 12 mA. What is the indicated temperature?** Fraction = (12−4)/16 = 0.5; PV = **100°C**.

**A35. A 0–100 bar transmitter is at 25 bar. What signal is expected?** I = 4 + 16(25/100) = **8 mA**.

**A36. A device passes bench calibration, but the DCS displays the wrong range. Is commissioning complete?** No. Check full loop wiring/channel/scaling, prove integrated behavior and correct records. Bench calibration does not validate the installed system.

**A37. A conductive dust area is labeled IIC in a dust-group table.** Correct the category distinction: the relevant IEC dust group is **IIIC**; IIC is a gas group. Determine zone and temperature/installation requirements independently.

**A38. An enclosure has high IP ingress protection but no suitable hazardous-location approval.** IP rating alone is insufficient. Verify the required explosion-protection certification and installation conditions.

**A39. Two bonded enclosures have no reliable fault-return connection to the source. Is bonding between them enough?** No. Verify the complete protective path and protective-device operation; joining two pieces of metal does not alone establish an effective fault-clearing system.

**A40. Wiring looks neat and all devices power up. Can the plant be handed over?** Not yet. Complete specified inspection, functional/loop tests, commissioning of alarms/interlocks/modes, defect closure, records and current as-built documentation.

## 14. Answers to the original Topic 12.1 quiz

These answers refer to the uploaded quiz, not the independently numbered practice questions above.

| Original item | Answer | Reason |
| --- | --- | --- |
| 1 | B | Correct safety response and acceptable risk reduction |
| 2 | C | IEC 61508 |
| 3 | C | Safety Integrity Level |
| 4 | D | SIL 4 highest among 1–4 |
| 5 | B | Evaluate hazards and further risk reduction |
| 6 | A | Safety requirements follow hazard/risk analysis |
| 7 | B | SIS provides independent protection |
| 8 | B | Sensor → logic solver → final element |
| 9 | A | Specific automatic protective function |
| 10 | B | Proof test verifies required safety function and reveals covered hidden failures |
| 11 | SIS = true | Functional safety reduces risk through safety-related systems |
| 12 | SIS = true | IEC 61508 is the general E/E/PE framework |
| 13 | SIS = true | Higher SIL means greater required risk reduction |
| 14 | SIL = false | Risk assessment is necessary |
| 15 | SIS = true | Lifecycle extends to decommissioning |
| 16 | SIL = false | IEC 61511 concerns SIS functional safety, not merely general-purpose control |
| 17 | SIL = false | SIS, not SIL, has sensors, logic solver and final elements |
| 18 | SIS = true | Logic solver receives inputs, executes logic and commands outputs |
| 19 | SIS = true | Proof tests detect covered dangerous hidden failures |
| 20 | SIS = true | Testing and maintenance preserve operational integrity |

For this particular quiz the instruction uses **SIS for true** and **SIL for false**. Those are response labels, not alternative definitions of the technical terms.

## 15. Last-pass memory sheet

- BPVC = pressure equipment; B31 = piping. B31.1 power; B31.3 process; B31.4 liquids; B31.8 gas transmission/distribution.
- BPVC V = examination methods; IX = welding/brazing qualifications; VIII = pressure vessels.
- Thickness: t = PD/[2(SE + PY)]; then add allowances and account for mill tolerance as applicable.
- Fabrication: material traceability → qualified joint preparation → qualified welding/assembly → required PWHT → examination/inspection/testing.
- Lecture test factors: hydro 1.5P; pneumatic 1.1P, with applicable limits/corrections.
- ISO 9001 QMS; 14001 environment; 45001 occupational safety; 27001 information security.
- QA prevents through processes; QC detects through output checks. PDCA = Plan, Do, Check, Act.
- Tag first letter = variable; following letters = functions/modifiers; number = loop. Read the legend.
- Process lines carry material; signal lines convey measurement/control information.
- Indicator displays; transmitter sends; controller regulates; switch changes state; final element acts.
- PFD overview; P&ID process/control relationships; index inventory; data sheet specification; loop diagram detailed connections; hook-up physical installation; narrative intended behavior.
- IEC 61508 general functional safety; IEC 61511 process SIS. SIS system; SIF function; SIL integrity target; BPCS everyday control.
- Sensor → logic solver → final element → safe state. A capable component alone does not establish complete-loop SIL.
- HAZOP identifies deviations; risk graph guides SIL selection; LOPA evaluates scenario frequency and independent layers.
- RRF ≈ 1/PFDavg. SIL 1: 10^-2–<10^-1; SIL 2: 10^-3–<10^-2; SIL 3: 10^-4–<10^-3; SIL 4: 10^-5–<10^-4.
- Proof testing reveals covered hidden dangerous failures; partial stroke and diagnostics do not replace every full proof-test requirement.
- Gas zones 0/1/2; dust zones 20/21/22. Gas groups IIA/IIB/IIC; dust groups IIIA/IIIB/IIIC.
- T1–T6: 450, 300, 200, 135, 100, 85°C. Larger T-class number = cooler limit.
- Ex d contain; i energy limit; e increased safety; p pressure/purge; m encapsulate; o immerse; q powder; t dust enclosure/temperature.
- Grounding connects to earth/reference; bonding connects conductive parts; maintain the effective protective path.
- Shield fights noise; armor fights mechanical damage; PE protects against faults. Follow the actual grounding/EMC design.
- Inspect installation → test performance → commission integrated operation → maintain evidence/current documents.

## 16. Visual study supplement

The PDF version includes selected original slide plates for symbol recognition, instrument-letter codes, process examples, piping design/testing and safety charts. These preserve image-only details that text extraction misses. Apply the corrections and limitations above when reading them. The editable version lists the same source-page references.
