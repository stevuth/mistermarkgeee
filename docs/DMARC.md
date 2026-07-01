# DMARC Record for mistermarkgee.com

DMARC (Domain-based Message Authentication, Reporting, and Conformance) is a DNS record that protects your domain from spoofing and improves email deliverability.

## Recommended DNS Record

To implement DMARC, add a new **TXT** record to your domain's DNS settings with the following details:

- **Host/Name:** `_dmarc`
- **Value:** `v=DMARC1; p=none; rua=mailto:hello@mistermarkgee.com`

### Explanation of the tags:
- `v=DMARC1`: The version of DMARC being used.
- `p=none`: The policy. `none` is the recommended starting point (monitoring mode). It tells email providers to deliver mail even if it fails checks, but send you reports. After a few weeks of monitoring, you can change this to `p=quarantine` or `p=reject` for higher security.
- `rua=mailto:hello@mistermarkgee.com`: This is the email address where aggregate security reports will be sent.

## Next Steps
1. Log in to your domain registrar or DNS provider.
2. Navigate to the DNS Management section.
3. Add the TXT record shown above.
4. Use a tool like [MXToolbox DMARC Check](https://mxtoolbox.com/DMARC.aspx) to verify it is active after 24 hours.
